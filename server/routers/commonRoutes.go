package routers

import (
	"candyHouse/controllers"

	"github.com/gin-gonic/gin"
)

func setCommonRouters(router *gin.Engine) {
	valueController := new(controllers.ValueController)
	router.GET("/values", valueController.GetValues)

}
