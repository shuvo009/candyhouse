package controllers

import (
	"candyHouse/models/service"
	"candyHouse/models/viewmodels"

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
	accountService.TalentRegister(talentRegister)
}
