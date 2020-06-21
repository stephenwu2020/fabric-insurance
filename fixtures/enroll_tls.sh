#!/bin/bash

CA_HOME=${PWD}/crypto/caservers/tlsca.example.com
HOME=${CA_HOME}/users/Admin@tlsca.example.com
LOG_LEVEL=error
ENROLL="fabric-ca-client enroll --loglevel ${LOG_LEVEL}"
REGISTER="fabric-ca-client register --loglevel ${LOG_LEVEL}"

mkdir -p ${HOME}

export FABRIC_CA_CLIENT_HOME=${HOME}
export FABRIC_CA_CLIENT_TLS_CERTFILES=${CA_HOME}/ca-cert.pem

${ENROLL} -u https://tls-ca-admin:tls-ca-adminpw@0.0.0.0:7052 
${REGISTER} --id.name peer1-org1 --id.secret peer1PW --id.type peer -u https://0.0.0.0:7052
${REGISTER} --id.name peer2-org1 --id.secret peer2PW --id.type peer -u https://0.0.0.0:7052
${REGISTER} --id.name peer1-org2 --id.secret peer1PW --id.type peer -u https://0.0.0.0:7052
${REGISTER} --id.name peer2-org2 --id.secret peer2PW --id.type peer -u https://0.0.0.0:7052
${REGISTER} --id.name orderer1-org0 --id.secret ordererPW --id.type orderer -u https://0.0.0.0:7052