package controllers

import (
	"candyHouse/models/service"

	"github.com/gin-gonic/gin"
)

//AuthController is for auth login
type AuthController struct{}

//Register is to press register
func (auth *AuthController) Register(c *gin.Context) {
	accountService := service.AccountService{}
	accountService.Create()
	return
}
