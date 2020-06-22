package v1

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/stephenwu2020/fabric-insurance/server/blockchain"
	"github.com/stephenwu2020/fabric-insurance/server/pkg/app"
)

func GetContractTypes(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}

	body := struct {
		ShopType string `json:"shop_type"`
	}{}

	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	args := [][]byte{}
	if body.ShopType != "" {
		arg0, err := json.Marshal(&body)
		if err != nil {
			appGin.Response(http.StatusInternalServerError, "fail", err.Error())
			return
		}
		args = append(args, arg0)
	}
	rsp, err := blockchain.ChannelExecute("contract_type_ls", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	var data []interface{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	appGin.Response(http.StatusOK, "success", data)
}

func CreateContractType(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}

	var body blockchain.ContractTypeWithUUID

	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	args := [][]byte{arg0}
	_, err = blockchain.ChannelExecute("contract_type_create", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", nil)
}

func ActiveContractType(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		UUID   string `json:"uuid"`
		Active bool   `json:"active"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{arg0}
	_, err = blockchain.ChannelExecute("contract_type_set_active", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", nil)
}
