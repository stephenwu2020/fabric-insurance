package routers

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	v1 "github.com/stephenwu2020/fabric-insurance/server/routers/api/v1"
	v2 "github.com/stephenwu2020/fabric-insurance/server/routers/api/v2"
)

//InitRouter initailize Gin framework touter
func InitRouter() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.Use(Cors())
	apiV1 := r.Group("/api/v1")
	apiV1.GET("/hello", v1.Hello)
	apiV1.POST("/getContractTypes", v1.GetContractTypes)
	apiV1.POST("/createContractType", v1.CreateContractType)
	apiV1.POST("/activeContractType", v1.ActiveContractType)
	apiV1.POST("/listContract", v1.ListContract)
	apiV1.POST("/createContract", v1.CreateContract)
	apiV1.POST("/listClaims", v1.ListClaims)
	apiV1.POST("/fileClaim", v1.FileClaim)

	apiV2 := r.Group("/api/v2")
	apiV2.GET("/hello", v2.Hello)
	apiV2.POST("/queryAllCars", v2.QueryAllCars)
	apiV2.POST("/queryCar", v2.QueryCar)
	apiV2.POST("/createCar", v2.CreateCar)
	apiV2.POST("/changeCarOwner", v2.ChangeCarOwner)

	// static file
	r.Use(static.Serve("/", static.LocalFile("./dist", true)))
	return r
}

// Cors alow cors
func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin")
		var headerKeys []string
		for k := range c.Request.Header {
			headerKeys = append(headerKeys, k)
		}
		headerStr := strings.Join(headerKeys, ", ")
		if headerStr != "" {
			headerStr = fmt.Sprintf("access-control-allow-origin, access-control-allow-headers, %s", headerStr)
		} else {
			headerStr = "access-control-allow-origin, access-control-allow-headers"
		}
		if origin != "" {
			c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
			c.Header("Access-Control-Allow-Origin", "*")
			c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE,UPDATE")
			c.Header("Access-Control-Allow-Headers", "Authorization, Content-Length, X-CSRF-Token, Token,session,X_Requested_With,Accept, Origin, Host, Connection, Accept-Encoding, Accept-Language,DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Pragma")
			c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers,Cache-Control,Content-Language,Content-Type,Expires,Last-Modified,Pragma,FooBar") // 跨域关键设置 让浏览器可以解析
			c.Header("Access-Control-Max-Age", "172800")                                                                                                                                                           // 缓存请求信息 单位为秒
			c.Header("Access-Control-Allow-Credentials", "false")                                                                                                                                                  //  跨域请求是否需要带cookie信息 默认设置为true
			c.Set("content-type", "application/json")                                                                                                                                                              // 设置返回格式是json
		}

		if method == "OPTIONS" {
			c.JSON(http.StatusOK, "Options Request!")
		}
		c.Next()
	}
}
