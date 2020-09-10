package controllers

import (
	"candyHouse/models/viewmodels"
	"candyHouse/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

//AuthController is for auth login
type AuthController struct{}

//TalentRegister is to press register
func (auth *AuthController) TalentRegister(c *gin.Context) {

	var talentRegister viewmodels.TalentRegister
	if err := c.ShouldBindJSON(&talentRegister); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	accountService := service.AccountService{}
	if err := accountService.TalentRegister(talentRegister); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "talent is created"})
}

//TalentLogin is to press register
func (auth *AuthController) TalentLogin(c *gin.Context) {

	var loginModel viewmodels.LoginModel
	if err := c.ShouldBindJSON(&loginModel); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	accountService := service.AccountService{}
	token, errf := accountService.TalentLogin(loginModel)
	if errf != nil {
		c.JSON(401, gin.H{"error": errf.Error()})
		return
	}

	c.JSON(200, gin.H{
		"token": token,
	})
}
