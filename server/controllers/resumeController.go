package controllers

import (
	"candyHouse/models/entity"
	"candyHouse/models/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

//ResumeController ...
type ResumeController struct{}

//Update ...
func (resumeController *ResumeController) Update(c *gin.Context) {
	account := c.MustGet("account").(*(entity.Account))
	var resume entity.Resume
	if err := c.ShouldBindJSON(&resume); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	resumeService := service.ResumeService{}
	if err := resumeService.UpdateResume(string(account.ID), resume); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Resume is updated"})
}

//GetMyResume ...
func (resumeController *ResumeController) GetMyResume(c *gin.Context) {
	account := c.MustGet("account").(*(entity.Account))
	resumeService := service.ResumeService{}
	resume, err := resumeService.GetResume(string(account.ID))

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, resume)
}
