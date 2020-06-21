#!/bin/bash

TLS_CA_HOME=${PWD}/crypto/caservers/tlsca.example.com
TLS_CA_ADMIN_HOME=${TLS_CA_HOME}/users/Admin@tlsca.example.com

ORG1_CA_HOME=${PWD}/crypto/caservers/org1ca.example.com
ORG1_HOME=${PWD}/crypto/peerOrganizations/org1.example.com
ORG1_PEER1_HOME=${ORG1_HOME}/peers/peer1.org1.example.com
ORG1_PEER2_HOME=${ORG1_HOME}/peers/peer2.org1.example.com
ORG1_ADMIN_HOME=${ORG1_HOME}/users/Admin@org1.example.com

LOG_LEVEL=error
ENROLL="fabric-ca-client enroll --loglevel ${LOG_LEVEL}"
REGISTER="fabric-ca-client register --loglevel ${LOG_LEVEL}"

# enroll ca admin
export FABRIC_CA_CLIENT_HOME=$ORG1_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG1_CA_HOME/ca-cert.pem
${ENROLL} -u https://org1-ca-admin:org1-ca-adminpw@0.0.0.0:7054
${REGISTER} --id.name peer1-org1 --id.secret peer1PW --id.type peer -u https://0.0.0.0:7054
${REGISTER} --id.name peer2-org1 --id.secret peer2PW --id.type peer -u https://0.0.0.0:7054
${REGISTER} --id.name admin-org1 --id.secret org1AdminPW --id.type admin -u https://0.0.0.0:7054
${REGISTER} --id.name user-org1 --id.secret org1UserPW --id.type user -u https://0.0.0.0:7054

# enroll peer 1
mkdir -p $ORG1_PEER1_HOME
export FABRIC_CA_CLIENT_HOME=$ORG1_PEER1_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG1_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://peer1-org1:peer1PW@0.0.0.0:7054

# enroll peer 1 tls
export FABRIC_CA_CLIENT_HOME=$ORG1_PEER1_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$TLS_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=tls-msp
${ENROLL} -u https://peer1-org1:peer1PW@0.0.0.0:7052 --enrollment.profile tls --csr.hosts peer1.org1.example.com
mv $ORG1_PEER1_HOME/tls-msp/keystore/* $ORG1_PEER1_HOME/tls-msp/keystore/key.pem

# enroll peer 2
export FABRIC_CA_CLIENT_HOME=$ORG1_PEER2_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG1_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://peer2-org1:peer2PW@0.0.0.0:7054

# enroll peer 2 tls
export FABRIC_CA_CLIENT_HOME=$ORG1_PEER2_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$TLS_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=tls-msp
${ENROLL} -u https://peer2-org1:peer2PW@0.0.0.0:7052 --enrollment.profile tls --csr.hosts peer2.org1.example.com
mv $ORG1_PEER2_HOME/tls-msp/keystore/* $ORG1_PEER2_HOME/tls-msp/keystore/key.pem

# enroll user org1 admin, for installing and instanciating chaincode
export FABRIC_CA_CLIENT_HOME=$ORG1_ADMIN_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG1_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://admin-org1:org1AdminPW@0.0.0.0:7054

# adimincerts is required when generating genesis block
mkdir -p $ORG1_HOME/msp/admincerts
mkdir -p $ORG1_PEER1_HOME/msp/admincerts
mkdir -p $ORG1_PEER2_HOME/msp/admincerts
mkdir -p $ORG1_ADMIN_HOME/msp/admincerts
cp $ORG1_ADMIN_HOME/msp/signcerts/cert.pem $ORG1_HOME/msp/admincerts/org1-admin-cert.pem
cp $ORG1_ADMIN_HOME/msp/signcerts/cert.pem $ORG1_PEER1_HOME/msp/admincerts/org1-admin-cert.pem
cp $ORG1_ADMIN_HOME/msp/signcerts/cert.pem $ORG1_PEER2_HOME/msp/admincerts/org1-admin-cert.pem
cp $ORG1_ADMIN_HOME/msp/signcerts/cert.pem $ORG1_ADMIN_HOME/msp/admincerts/org1-admin-cert.pem

# cp tlscacerts is necessary, for genesis block creatation
cp -r $ORG1_PEER1_HOME/tls-msp/tlscacerts $ORG1_HOME/msp
cp -r $ORG1_PEER1_HOME/tls-msp/tlscacerts $ORG1_PEER1_HOME/msp
cp -r $ORG1_PEER1_HOME/tls-msp/tlscacerts $ORG1_PEER2_HOME/msp

# rename is required, otherwise fabric-sdk-go init failed with no user
mv $ORG1_ADMIN_HOME/msp/signcerts/cert.pem $ORG1_ADMIN_HOME/msp/signcerts/Admin@org1.example.com-cert.pem