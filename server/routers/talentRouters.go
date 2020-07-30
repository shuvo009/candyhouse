package routers

import (
	"candyHouse/controllers"

	"github.com/gin-gonic/gin"
)

func setTalentRouters(router *gin.Engine) {
	authController := new(controllers.AuthController)

	talent := router.Group("/talent")
	{
		talent.POST("/login", authController.TalentLogin)
		talent.POST("/register", authController.TalentRegister)
	}

}
