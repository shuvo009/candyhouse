package routers

import (
	"candyHouse/controllers"

	"github.com/gin-gonic/gin"
)

func setAuthRoute(router *gin.Engine) {
	authController := new(controllers.AuthController)
	router.POST("/talent/register", authController.TalentRegister)
}
