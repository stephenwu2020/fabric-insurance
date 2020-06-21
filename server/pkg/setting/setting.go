package setting

import (
	"log"
	"time"

	"github.com/go-ini/ini"
)

type Server struct {
	RunMode      string
	HttpPort     int
	ReadTimeout  time.Duration
	WriteTimeout time.Duration
}

// ServerSetting like port mode etc
var ServerSetting = &Server{}

// Setup fill ini vars into Server struct
func Setup() {
	cfg, err := ini.Load("conf/app.ini")
	if err != nil {
		log.Fatalf("setting.Setup, fail to parse 'conf/app.ini': %v", err)
	}

	sectionName := "server"
	err = cfg.Section(sectionName).MapTo(ServerSetting)
	if err != nil {
		log.Fatalf("Cfg.MapTo %s err: %v", sectionName, err)
	}

	ServerSetting.ReadTimeout = ServerSetting.ReadTimeout * time.Second
	ServerSetting.WriteTimeout = ServerSetting.WriteTimeout * time.Second
}
