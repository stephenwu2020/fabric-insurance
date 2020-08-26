#!/bin/bash

TLS_CA_HOME=${PWD}/crypto/caservers/tlsca.example.com
TLS_CA_ADMIN_HOME=${TLS_CA_HOME}/users/Admin@tlsca.example.com

ORG0_CA_HOME=${PWD}/crypto/caservers/org0ca.example.com
ORG0_HOME=${PWD}/crypto/ordererOrganizations/org0.example.com
ORG0_ORDERER_HOME=${ORG0_HOME}/orderers/orderer.org0.example.com
ORG0_ADMIN_HOME=${ORG0_HOME}/users/Admin@org0.example.com

LOG_LEVEL=error
ENROLL="./bin/fabric-ca-client enroll --loglevel ${LOG_LEVEL}"
REGISTER="./bin/fabric-ca-client register --loglevel ${LOG_LEVEL}"


#enroll ca admin
export FABRIC_CA_CLIENT_HOME=$ORG0_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG0_CA_HOME/ca-cert.pem
${ENROLL} -u https://org0-ca-admin:org0-ca-adminpw@0.0.0.0:7053
${REGISTER} --id.name orderer1-org0 --id.secret ordererpw --id.type orderer -u https://0.0.0.0:7053
${REGISTER} --id.name admin-org0 --id.secret org0adminpw --id.type admin  -u https://0.0.0.0:7053 --id.attrs "hf.Registrar.Roles=client,hf.Registrar.Attributes=*,hf.Revoker=true,hf.GenCRL=true,admin=true:ecert,abac.init=true:ecert"

# enroll orderer 
export FABRIC_CA_CLIENT_HOME=$ORG0_ORDERER_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG0_CA_HOME/ca-cert.pem
${ENROLL} -u https://orderer1-org0:ordererpw@0.0.0.0:7053

# enroll orderer tls
export FABRIC_CA_CLIENT_HOME=$ORG0_ORDERER_HOME
export FABRIC_CA_CLIENT_MSPDIR=tls-msp
export FABRIC_CA_CLIENT_TLS_CERTFILES=$TLS_CA_HOME/ca-cert.pem
${ENROLL} -u https://orderer1-org0:ordererPW@0.0.0.0:7052 --enrollment.profile tls --csr.hosts orderer.org0.example.com
mv $ORG0_ORDERER_HOME/tls-msp/keystore/* $ORG0_ORDERER_HOME/tls-msp/keystore/key.pem

# enroll org0 admin
export FABRIC_CA_CLIENT_HOME=$ORG0_ADMIN_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG0_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://admin-org0:org0adminpw@0.0.0.0:7053

# adimincerts is required when generating genesis block
mkdir -p $ORG0_HOME/msp/admincerts
mkdir -p $ORG0_ORDERER_HOME/msp/admincerts
mkdir -p $ORG0_ADMIN_HOME/msp/admincerts
cp $ORG0_ADMIN_HOME/msp/signcerts/cert.pem $ORG0_HOME/msp/admincerts/org0-admin-cert.pem
cp $ORG0_ADMIN_HOME/msp/signcerts/cert.pem $ORG0_ORDERER_HOME/msp/admincerts/org0-admin-cert.pem
cp $ORG0_ADMIN_HOME/msp/signcerts/cert.pem $ORG0_ADMIN_HOME/msp/admincerts/org0-admin-cert.pem

# cp tlscacerts is necessary, for genesis block creatation
cp -r $ORG0_ORDERER_HOME/tls-msp/tlscacerts $ORG0_HOME/msp
cp -r $ORG0_ORDERER_HOME/tls-msp/tlscacerts $ORG0_ORDERER_HOME/msp