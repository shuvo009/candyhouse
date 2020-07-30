package routers

import (
	"candyHouse/controllers"
	"candyHouse/middlewares"

	"github.com/gin-gonic/gin"
)

func setTalentRouters(router *gin.Engine) {
	authController := new(controllers.AuthController)

	talent := router.Group("/talent")
	{
		talent.POST("/login", authController.TalentLogin)
		talent.POST("/register", authController.TalentRegister)
		private := talent.Group("/")
		{
			resumeController := new(controllers.ResumeController)
			private.Use(middlewares.Authentication())
			private.POST("/resume/update", resumeController.Update)
			private.GET("/resume/my", resumeController.GetMyResume)
		}

	}

}
