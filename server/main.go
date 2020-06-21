package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/stephenwu2020/fabric-insurance/server/blockchain"
	"github.com/stephenwu2020/fabric-insurance/server/pkg/setting"
	"github.com/stephenwu2020/fabric-insurance/server/routers"
)

var ca bool

func init() {
	// server setting
	setting.Setup()
	// init time zoon
	timeLocal, err := time.LoadLocation("Asia/Chongqing")
	if err != nil {
		log.Println("Init time zoon failed:", err)
	}
	time.Local = timeLocal
	// init blockchain pkg
	blockchain.Init()
}

func main() {
	gin.SetMode(setting.ServerSetting.RunMode)
	routersInit := routers.InitRouter()
	readTimeout := setting.ServerSetting.ReadTimeout
	writeTimeout := setting.ServerSetting.WriteTimeout
	endPoint := fmt.Sprintf(":%d", setting.ServerSetting.HttpPort)
	maxHeaderBytes := 1 << 20

	server := &http.Server{
		Addr:           endPoint,
		Handler:        routersInit,
		ReadTimeout:    readTimeout,
		WriteTimeout:   writeTimeout,
		MaxHeaderBytes: maxHeaderBytes,
	}

	log.Printf("[info] start http server listening %s", endPoint)

	if err := server.ListenAndServe(); err != nil {
		log.Printf("start http server failed %s", err)
	}
}
