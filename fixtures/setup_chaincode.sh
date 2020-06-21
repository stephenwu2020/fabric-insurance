#!/bin/bash

CRYPTO_HOME=${PWD}/crypto
ARTIFACTS_HOME=${PWD}/artifacts
CHAN_NAME="assetschannel"

CAFILE_ON_ORG1="--tls --cafile /tmp/hyperledger/org1/peer1/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem"
PEER_CMD="docker exec -e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp cli.org1.example.com peer"

#CURRENT="fabcar"
CURRENT="insurance"

if [ "${CURRENT}" == "insurance" ]; then
  echo "setup insurance env..."
  NAME="insurance"
  VERSION="1.2.0"
  PKG="github.com/stephenwu2020/fabric-insurance/chaincode/insurance"
  INS_MSG='{"Args":["init"]}'
  INV_MSG='{"function":"contract_type_ls","Args":[]}'
  QUE_MSG=''
else
  echo "no chaincode seleted!"
  exit 1
fi

function install(){
  echo "install chaincode..."
  ${PEER_CMD} chaincode install \
    -n ${NAME} \
    -v ${VERSION} \
    -l golang \
    -p ${PKG}
}

function instantiate(){
  echo "instantiate chaincode..."
  ${PEER_CMD} chaincode instantiate \
    -o orderer.org0.example.com:7050 \
    -C ${CHAN_NAME} \
    -n ${NAME} \
    -l golang \
    -v ${VERSION} \
    -c ${INS_MSG} \
    ${CAFILE_ON_ORG1}
}

function invoke(){
  echo "invoke chaincode..."
  ${PEER_CMD} chaincode invoke \
    -o orderer.org0.example.com:7050 \
    -C ${CHAN_NAME} \
    -n ${NAME} \
    -c ${INV_MSG} \
    ${CAFILE_ON_ORG1}
}

function query(){
  echo "query chaincode..."
  if [ -z "${QUE_MSG}" ]; then
    echo "skip"
    return
  fi
  ${PEER_CMD} chaincode query \
    -C ${CHAN_NAME} \
    -n ${NAME} \
    -c ${QUE_MSG}
}

function main(){
  install
  sleep 3
  instantiate
  sleep 3
  invoke
  sleep 3
  query
  sleep 3
}

main