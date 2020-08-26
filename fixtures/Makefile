DOCKER_COMPOSE_FILE=${PWD}/docker-compose.yaml
CRYPTO_HOME=${PWD}/crypto
ARTIFACTS_HOME=${PWD}/artifacts
CHAN_NAME="assetschannel"
FABRIC_VERSION=1.4.2


# fetch dependency
.PHONY: dep
dep:
	@echo "fetching dependency"
	./scripts/bootstrap.sh ${FABRIC_VERSION} ${FABRIC_VERSION} -s
	@echo "fetching dependency finsihed."

.PHONY: new
new:  setup-network setup-channel setup-chaincode

.PHONY: destroy
destroy: down clean

.PHONY: setup-network
setup-network: gen-dir ca-up  ca-enroll gen-artifacts net-up

.PHONY: setup-channel
setup-channel: create-chan join-chan update-anchor

.PHONY: setup-chaincode
setup-chaincode: 
	@./scripts/setup_chaincode.sh

.PHONY: gen-dir
gen-dir:
	@echo "generate dirs..."
	@rm -rf ${CRYPTO_HOME} ${ARTIFACTS_HOME}
	@mkdir ${CRYPTO_HOME} ${ARTIFACTS_HOME}

.PHONY: ca-up
ca-up:
	@echo "boot up ca servers..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE} up -d \
		tlsca.example.com org0ca.example.com org1ca.example.com org2ca.example.com
	@echo "wait for 5s..." && sleep 5

.PHONY: ca-enroll
ca-enroll:
	@echo "enroll and register..."
	@./scripts/enroll_tls.sh	
	@./scripts/enroll_org0.sh
	@./scripts/enroll_org1.sh
	@./scripts/enroll_org2.sh

.PHONY: gen-artifacts
gen-artifacts:
	@echo "generate artifacts..."
	@./bin/configtxgen -profile OrgsOrdererGenesis -outputBlock ${ARTIFACTS_HOME}/genesis.block -channelID syschannel
	@./bin/configtxgen -profile OrgsChannel -outputCreateChannelTx ${ARTIFACTS_HOME}/channel.tx -channelID ${CHAN_NAME}

.PHONY: net-up
net-up:
	@echo "boot up network..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE} up -d \
		orderer.org0.example.com \
		peer1.org1.example.com peer2.org1.example.com \
		peer1.org2.example.com peer2.org2.example.com \
		cli.org1.example.com cli.org2.example.com
	@echo "wait for 5s..." && sleep 5

.PHONY: create-chan
create-chan:
	@echo "create channel..."
	@docker exec -e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp \
		cli.org1.example.com peer channel create -c ${CHAN_NAME} \
		-f /tmp/hyperledger/artifacts/channel.tx \
		-o  orderer.org0.example.com:7050 \
		--outputBlock /tmp/hyperledger/artifacts/${CHAN_NAME}.block \
		--tls --cafile /tmp/hyperledger/org1/peer1/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem

.PHONY: join-chan
join-chan:
	@echo "join channel..."
	# org1
	@docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp \
		-e CORE_PEER_ADDRESS=peer1.org1.example.com:7051 \
		cli.org1.example.com peer channel join -b /tmp/hyperledger/artifacts/${CHAN_NAME}.block \
		--tls --cafile /tmp/hyperledger/org1/peer1/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem

	@docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp \
		-e CORE_PEER_ADDRESS=peer2.org1.example.com:7051 \
		cli.org1.example.com peer channel join -b /tmp/hyperledger/artifacts/${CHAN_NAME}.block \
		--tls --cafile /tmp/hyperledger/org1/peer2/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem

	# org2
	@docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org2/admin/msp \
		-e CORE_PEER_ADDRESS=peer1.org2.example.com:7051 \
		cli.org2.example.com peer channel join -b /tmp/hyperledger/artifacts/${CHAN_NAME}.block \
		--tls --cafile /tmp/hyperledger/org2/peer1/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem
	
	@docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org2/admin/msp \
		-e CORE_PEER_ADDRESS=peer2.org2.example.com:7051 \
		cli.org2.example.com peer channel join -b /tmp/hyperledger/artifacts/${CHAN_NAME}.block \
		--tls --cafile /tmp/hyperledger/org2/peer2/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem

.PHONY: update-anchor
update-anchor:
	#org1's anchor peer
	@./bin/configtxgen -profile OrgsChannel -outputAnchorPeersUpdate ${ARTIFACTS_HOME}/org1Anchors.tx -channelID ${CHAN_NAME} -asOrg org1
	@docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp \
		-e CORE_PEER_ADDRESS=peer1.org1.example.com:7051 \
		cli.org1.example.com peer channel update -o orderer.org0.example.com:7050 \
		-c ${CHAN_NAME} -f /tmp/hyperledger/artifacts/org1Anchors.tx \
		--tls --cafile /tmp/hyperledger/org1/peer1/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem

	@echo "wait for 3s..."
	@sleep 3

	# org2's anchor peer
	@./bin/configtxgen -profile OrgsChannel -outputAnchorPeersUpdate ${ARTIFACTS_HOME}/org2Anchors.tx -channelID ${CHAN_NAME} -asOrg org2
	@docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org2/admin/msp \
		-e CORE_PEER_ADDRESS=peer1.org2.example.com:7051 \
		cli.org2.example.com peer channel update -o orderer.org0.example.com:7050 \
		-c ${CHAN_NAME} -f /tmp/hyperledger/artifacts/org2Anchors.tx \
		--tls --cafile /tmp/hyperledger/org2/peer1/tls-msp/tlscacerts/tls-0-0-0-0-7052.pem

.PHONY: debug
debug:
	#docker exec \
	#	-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp \
	#	-e CORE_PEER_ADDRESS=peer1.org1.example.com:7051 \
	#	cli.org1.example.com peer chaincode list --installed

	docker exec \
		-e CORE_PEER_MSPCONFIGPATH=/tmp/hyperledger/org1/admin/msp \
		-e CORE_PEER_ADDRESS=peer1.org1.example.com:7051 \
		cli.org1.example.com peer chaincode list -C${CHAN_NAME} --instantiated

.PHONY: down
down:
	@echo "bring network down..."
	@docker-compose -f ${DOCKER_COMPOSE_FILE} down

.PHONY: clean
clean:
	@echo "clean crypto materials and artifacts..."
	@rm -rf ${CRYPTO_HOME} ${ARTIFACTS_HOME}
	@./scripts/cleaner.sh