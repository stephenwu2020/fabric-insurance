package v2

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/stephenwu2020/fabric-insurance/server/blockchain"
	"github.com/stephenwu2020/fabric-insurance/server/pkg/app"
)

func QueryCar(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}

	type Body struct {
		Key string `json:"key"`
	}
	var body Body

	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	var args [][]byte
	args = append(args, []byte(body.Key))
	rsp, err := blockchain.ChannelQuery("queryCar", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	var data map[string]interface{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	appGin.Response(http.StatusOK, "success", data)
}

func QueryAllCars(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}

	rsp, err := blockchain.ChannelQuery("queryAllCars", nil)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	var data interface{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	appGin.Response(http.StatusOK, "success", data)

}

func CreateCar(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}

	type Body struct {
		Make   string `json:"make"`
		Model  string `json:"model"`
		Colour string `json:"colour"`
		Owner  string `json:"owner"`
	}
	var body Body
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	var args [][]byte
	args = append(args, []byte(body.Make), []byte(body.Model), []byte(body.Colour), []byte(body.Owner))
	_, err := blockchain.ChannelExecute("createCar", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	appGin.Response(http.StatusOK, "success", "")
}

func ChangeCarOwner(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}

	type Body struct {
		Key   string `json:"key"`
		Owner string `json:"owner"`
	}
	var body Body
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	var args [][]byte
	args = append(args, []byte(body.Key), []byte(body.Owner))
	_, err := blockchain.ChannelExecute("changeCarOwner", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	appGin.Response(http.StatusOK, "success", "")
}
