package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

//ValueController ...
type ValueController struct{}

//GetValues ...
func (valueController *ValueController) GetValues(c *gin.Context) {

	var values = ValueModel{
		SocialMedia: getSocialMediaList(),
	}

	c.JSON(http.StatusOK, values)
}

// #region Supported Methods

func getSocialMediaList() []SocialMedia {
	return []SocialMedia{
		SocialMedia{
			Name:        "Github",
			Placeholder: "https://github.com/yourusername",
		},
		SocialMedia{
			Name:        "StackOverflow",
			Placeholder: "http://stackoverflow.com/users/1234/yourusername",
		},
		SocialMedia{
			Name:        "LinkedIn",
			Placeholder: "https://www.linkedin.com/in/yourusername",
		},
		SocialMedia{
			Name:        "PortfolioLink",
			Placeholder: "https://www.linkedin.com/in/yourusername",
		},
	}
}

// #endregion

// #region Models

//ValueModel ...
type ValueModel struct {
	SocialMedia []SocialMedia `json:"socialMedia"`
}

//SocialMedia ...
type SocialMedia struct {
	Name        string `json:"name"`
	Placeholder string `json:"placeholder"`
}

// #endregion
