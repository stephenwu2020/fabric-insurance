package v1

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/stephenwu2020/fabric-insurance/server/pkg/app"
)

// Hello test
func Hello(c *gin.Context) {
	appG := app.Gin{C: c}
	appG.Response(http.StatusOK, "success", map[string]interface{}{
		"msg": "Hello",
	})
}
