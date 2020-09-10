package routers

import (
	"candyHouse/controllers"
	"candyHouse/middlewares"

	"github.com/gin-gonic/gin"
)

func setTalentRouters(router *gin.Engine) {
	authController := new(controllers.AuthController)
	router.Static("/image", "./profilepic")

	talent := router.Group("/talent")
	{
		talent.POST("/login", authController.TalentLogin)
		talent.POST("/register", authController.TalentRegister)
		private := talent.Group("/")
		{
			resumeController := new(controllers.ResumeController)
			private.Use(middlewares.Authentication())
			private.POST("/resume/update", resumeController.Update)
			private.POST("/resume/pic", resumeController.SetPic)
			private.GET("/resume/my", resumeController.GetMyResume)
		}

	}

}
