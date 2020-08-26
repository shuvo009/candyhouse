package controllers

import (
	"candyHouse/models/entity"
	"candyHouse/service"
	"net/http"
	"path/filepath"
	"strconv"
	"time"

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
	if err := resumeService.UpdateResume(account.ID, resume); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Resume is updated"})
}

//GetMyResume ...
func (resumeController *ResumeController) GetMyResume(c *gin.Context) {
	account := c.MustGet("account").(*(entity.Account))
	resumeService := service.ResumeService{}
	resume, err := resumeService.GetResume(account.ID)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, resume)
}

//SetPic ...
func (resumeController *ResumeController) SetPic(c *gin.Context) {
	file, _ := c.FormFile("image")
	dt := strconv.FormatInt(time.Now().Unix(), 10)
	filename := dt + "_" + filepath.Base(file.Filename)
	if err := c.SaveUploadedFile(file, "./profilepic/"+filename); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	resumeService := service.ResumeService{}
	account := c.MustGet("account").(*(entity.Account))
	resume, updateError := resumeService.UpdateProfilePic(account.ID, filename)
	if updateError != nil {
		c.JSON(500, gin.H{"error": updateError.Error()})
		return
	}
	c.JSON(http.StatusOK, resume)
}
