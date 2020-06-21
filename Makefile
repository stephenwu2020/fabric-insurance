# build serverapp
.PHONY: build
build:
	@echo "building..."
	cd server && go build -o serverapp
	@echo "build finished."

# build web app
.PHONY: build-web
build-web:
	@echo "building web app..."
	cd web && yarn build
	@echo "build web app finished."

# start serverapp
.PHONY: start-server
start-server:
	@cd server && nohup ./serverapp >> serverapp.log &
	@echo "serverapp is running"
	@ps | grep serverapp |grep -v grep


# stop serverapp
.PHONY: stop-server
stop-server:
	@ps | grep serverapp | grep -v grep | awk '{print $$1}' | xargs kill -9
	@echo "serverapp has stopped"

# bring up network
.PHONY: start-network
start-network:
	cd fixtures && make all

# bring down network
.PHONY: stop-network
stop-network:
	cd fixtures && make all-stop


.PHONY: restart-sleep
restart-sleep:
	sleep 5

.PHONY: restart-network
restart-network: stop-network restart-sleep start-network

.PHONY: api-test
api-test: API_HEAD=localhost:8000/api/v1
api-test: HEADER=--header "Content-Type: application/json"
api-test:
	@echo "√ Start testing APIs ...\n"
	curl ${API_HEAD}/getContractTypes
	@echo "\n\n√ Finish testing APIs."
#	curl ${API_HEAD}/hello
#	@echo "\n"
#	curl -XPOST ${API_HEAD}/queryAllCars
#	@echo "\n"
#	curl -XPOST -d '{"key": "CAR0"}' ${HEADER} ${API_HEAD}/queryCar
#	@echo "\n"
#	curl -XPOST -d '{"make":"Ferrari","model":"488","colour":"Red","owner":"Kimi"}' ${HEADER} ${API_HEAD}/createCar
#	@echo "\n"
#	curl -XPOST -d '{"key":"CAR1","owner":"Baby"}' ${HEADER} ${API_HEAD}/changeCarOwner
#	@echo "\n"
#	curl -XPOST ${API_HEAD}/queryAllCars
#	@echo "\n\n√ Finish testing APIs."