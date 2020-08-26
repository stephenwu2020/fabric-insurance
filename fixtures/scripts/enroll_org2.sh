#!/bin/bash

TLS_CA_HOME=${PWD}/crypto/caservers/tlsca.example.com
TLS_CA_ADMIN_HOME=${TLS_CA_HOME}/users/Admin@tlsca.example.com

ORG2_CA_HOME=${PWD}/crypto/caservers/org2ca.example.com
ORG2_HOME=${PWD}/crypto/peerOrganizations/org2.example.com
ORG2_PEER1_HOME=${ORG2_HOME}/peers/peer1.org2.example.com
ORG2_PEER2_HOME=${ORG2_HOME}/peers/peer2.org2.example.com
ORG2_ADMIN_HOME=${ORG2_HOME}/users/Admin@org2.example.com

LOG_LEVEL=error
ENROLL="./bin/fabric-ca-client enroll --loglevel ${LOG_LEVEL}"
REGISTER="./bin/fabric-ca-client register --loglevel ${LOG_LEVEL}"

# enroll ca admin
export FABRIC_CA_CLIENT_HOME=$ORG2_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG2_CA_HOME/ca-cert.pem
${ENROLL} -u https://org2-ca-admin:org2-ca-adminpw@0.0.0.0:7055
${REGISTER} --id.name peer1-org2 --id.secret peer1PW --id.type peer -u https://0.0.0.0:7055
${REGISTER} --id.name peer2-org2 --id.secret peer2PW --id.type peer -u https://0.0.0.0:7055
${REGISTER} --id.name admin-org2 --id.secret org2AdminPW --id.type admin -u https://0.0.0.0:7055
${REGISTER} --id.name user-org2 --id.secret org2UserPW --id.type user -u https://0.0.0.0:7055

# enroll peer 1
mkdir -p $ORG2_PEER1_HOME
export FABRIC_CA_CLIENT_HOME=$ORG2_PEER1_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG2_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://peer1-org2:peer1PW@0.0.0.0:7055

# enroll peer 1 tls
export FABRIC_CA_CLIENT_HOME=$ORG2_PEER1_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$TLS_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=tls-msp
${ENROLL} -u https://peer1-org2:peer1PW@0.0.0.0:7052 --enrollment.profile tls --csr.hosts peer1.org2.example.com
mv $ORG2_PEER1_HOME/tls-msp/keystore/* $ORG2_PEER1_HOME/tls-msp/keystore/key.pem

# enroll peer 2
export FABRIC_CA_CLIENT_HOME=$ORG2_PEER2_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG2_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://peer2-org2:peer2PW@0.0.0.0:7055

# enroll peer 2 tls
export FABRIC_CA_CLIENT_HOME=$ORG2_PEER2_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$TLS_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=tls-msp
${ENROLL} -u https://peer2-org2:peer2PW@0.0.0.0:7052 --enrollment.profile tls --csr.hosts peer2.org2.example.com
mv $ORG2_PEER2_HOME/tls-msp/keystore/* $ORG2_PEER2_HOME/tls-msp/keystore/key.pem

# enroll user org2 admin, for installing and instanciating chaincode
export FABRIC_CA_CLIENT_HOME=$ORG2_ADMIN_HOME
export FABRIC_CA_CLIENT_TLS_CERTFILES=$ORG2_CA_HOME/ca-cert.pem
export FABRIC_CA_CLIENT_MSPDIR=msp
${ENROLL} -u https://admin-org2:org2AdminPW@0.0.0.0:7055

# adimincerts is required when generating genesis block
mkdir -p $ORG2_HOME/msp/admincerts
mkdir -p $ORG2_PEER1_HOME/msp/admincerts
mkdir -p $ORG2_PEER2_HOME/msp/admincerts
mkdir -p $ORG2_ADMIN_HOME/msp/admincerts
cp $ORG2_ADMIN_HOME/msp/signcerts/cert.pem $ORG2_HOME/msp/admincerts/org2-admin-cert.pem
cp $ORG2_ADMIN_HOME/msp/signcerts/cert.pem $ORG2_PEER1_HOME/msp/admincerts/org2-admin-cert.pem
cp $ORG2_ADMIN_HOME/msp/signcerts/cert.pem $ORG2_PEER2_HOME/msp/admincerts/org2-admin-cert.pem
cp $ORG2_ADMIN_HOME/msp/signcerts/cert.pem $ORG2_ADMIN_HOME/msp/admincerts/org2-admin-cert.pem

# cp tlscacerts is necessary, for genesis block creatation
cp -r $ORG2_PEER1_HOME/tls-msp/tlscacerts $ORG2_HOME/msp
cp -r $ORG2_PEER1_HOME/tls-msp/tlscacerts $ORG2_PEER1_HOME/msp
cp -r $ORG2_PEER1_HOME/tls-msp/tlscacerts $ORG2_PEER2_HOME/msp