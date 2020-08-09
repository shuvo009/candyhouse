package routers

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

//InitRoute ...
func InitRoute() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	router.Use(cors.Default())

	setTalentRouters(router)
	return router
}
