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

.PHONY: test
test: API_HEAD=localhost:8000/api/v1
test: POST=curl -XPOST -s --header "Content-Type: application/json" 
test: FORMAT=python -m json.tool
test:
	@echo "√ Start testing APIs ...\n"
	#${POST} -d '{}' ${API_HEAD}/getContractTypes | ${FORMAT}
	#${POST} -d '{"uuid": "63ef076a-33a1-41d2-a9bc-2777505b014f", "active": false}' ${API_HEAD}/activeContractType | ${FORMAT}
	#${POST} -d '{"shop_type": "B" }' ${API_HEAD}/getContractTypes | ${FORMAT}
	${POST} ${API_HEAD}/createContractType -d '{"uuid":"12345","shop_type":"C","formula_per_day":"30.00","max_sum_insured":2000.00,"theft_insured":false,"description":"test","conditions":"test","active":true,"min_duration_days":1,"max_duration_days":100}' | ${FORMAT}
	${POST} -d '{"shop_type": "C" }' ${API_HEAD}/getContractTypes | ${FORMAT}
	@echo "\n√ Finish testing APIs."