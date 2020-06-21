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

	type Body struct {
		Key string `json:"key"`
	}
	var body Body

	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	args := [][]byte{}
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
