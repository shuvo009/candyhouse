package controllers

import (
	"candyHouse/models/service"
	"candyHouse/models/viewmodels"
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
