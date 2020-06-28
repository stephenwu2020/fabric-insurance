package v1

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	gouuid "github.com/nu7hatch/gouuid"
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

func ListContract(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		Username string `json:"username"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	if body.Username != "" {
		arg0, err := json.Marshal(&body)
		if err != nil {
			appGin.Response(http.StatusInternalServerError, "fail", err.Error())
			return
		}
		args = append(args, arg0)
	}
	rsp, err := blockchain.ChannelExecute("contract_ls", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	data := []interface{}{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", data)
}

func CreateContract(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		ContractTypeUUID string          `json:"contract_type_uuid"`
		Username         string          `json:"username"`
		Password         string          `json:"password"`
		FirstName        string          `json:"first_name"`
		LastName         string          `json:"last_name"`
		Item             blockchain.Item `json:"item"`
		StartDate        string          `json:"start_date"`
		EndDate          string          `json:"end_date"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	input := struct {
		UUID             string          `json:"uuid"`
		ContractTypeUUID string          `json:"contract_type_uuid"`
		Username         string          `json:"username"`
		Password         string          `json:"password"`
		FirstName        string          `json:"first_name"`
		LastName         string          `json:"last_name"`
		Item             blockchain.Item `json:"item"`
		StartDate        time.Time       `json:"start_date"`
		EndDate          time.Time       `json:"end_date"`
	}{}

	uuid, err := gouuid.NewV4()
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	start, err := strconv.ParseInt(body.StartDate, 10, 64)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	startDate := time.Unix(start, 0)
	end, err := strconv.ParseInt(body.EndDate, 10, 64)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	endDate := time.Unix(end, 0)

	input.UUID = uuid.String()
	input.ContractTypeUUID = body.ContractTypeUUID
	input.Username = body.Username
	input.Password = body.Password
	input.FirstName = body.FirstName
	input.LastName = body.LastName
	input.Item = body.Item
	input.StartDate = startDate
	input.EndDate = endDate

	args := [][]byte{}
	arg0, err := json.Marshal(&input)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args = append(args, arg0)
	rsp, err := blockchain.ChannelExecute("contract_create", args)
	data := map[string]interface{}{}
	if err := json.Unmarshal(rsp.Payload, &data); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", data)
}

func ListClaims(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		Status blockchain.ClaimStatus `json:"status"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	if body.Status != 0 {
		arg0, err := json.Marshal(&body)
		if err != nil {
			appGin.Response(http.StatusInternalServerError, "fail", err.Error())
			return
		}
		args = append(args, arg0)
	}

	rsp, err := blockchain.ChannelExecute("claim_ls", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	data := []interface{}{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", data)
}

func GetUser(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		Username string `json:"username"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args = append(args, arg0)
	rsp, err := blockchain.ChannelExecute("user_get_info", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	data := map[string]interface{}{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", data)
}

func AuthUser(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args = append(args, arg0)
	rsp, err := blockchain.ChannelExecute("user_authenticate", args)
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

func FileClaim(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		UUID         string    `json:"uuid"`
		ContractUUID string    `json:"contract_uuid"`
		Date         time.Time `json:"date"`
		Description  string    `json:"description"`
		IsTheft      bool      `json:"is_theft"`
	}{}
	now := time.Now()
	uuid, err := gouuid.NewV4()
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	body.UUID = uuid.String()
	body.Date = now
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args = append(args, arg0)
	_, err = blockchain.ChannelExecute("claim_file", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", nil)
}

func ProcessClaim(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		UUID         string                 `json:"uuid"`
		ContractUUID string                 `json:"contract_uuid"`
		Status       blockchain.ClaimStatus `json:"status"`
		Reimbursable float32                `json:"reimbursable"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args = append(args, arg0)

	_, err = blockchain.ChannelExecute("claim_process", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", nil)
}

func ListTheftClaims(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	args := [][]byte{}
	rsp, err := blockchain.ChannelExecute("theft_claim_ls", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}

	data := []interface{}{}
	err = json.Unmarshal(rsp.Payload, &data)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", data)
}

func ProcessTheftClaim(ctx *gin.Context) {
	appGin := app.Gin{C: ctx}
	body := struct {
		UUID          string `json:"uuid"`
		ContractUUID  string `json:"contract_uuid"`
		IsTheft       bool   `json:"is_theft"`
		FileReference string `json:"file_reference"`
	}{}
	if err := ctx.ShouldBind(&body); err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args := [][]byte{}
	arg0, err := json.Marshal(&body)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	args = append(args, arg0)

	_, err = blockchain.ChannelExecute("theft_claim_process", args)
	if err != nil {
		appGin.Response(http.StatusInternalServerError, "fail", err.Error())
		return
	}
	appGin.Response(http.StatusOK, "success", nil)
}
