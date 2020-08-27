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
		SummaryList: getSumarryList(),
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

func getSumarryList() []Summary {
	return []Summary{
		Summary{
			Name:        "I_AM",
			Title:       "I am...",
			Description: "'Example answer: \"I'm a backend developer with a passion for building meaningful products and more than 6 years of experience mostly in startups.\"",
		},
		Summary{
			Name:        "MY_STRONGEST_SKILLS",
			Title:       "My strongest skills and how I learned them...",
			Description: "Example answer: \"My strengths lie within Rust and Ruby. I was lucky to work with some very knowledgeable senior developers at my first workplace. I have also had a lot of hands-on experience in recent years and have spent some time contributing to open source projects, as I care about giving back to the community.\"",
		},
		Summary{
			Name:        "WHAT_I_AM_LOOKING",
			Title:       "What I am looking for...",
			Description: "Example answer: \"I'm looking for a backend developer position, or a full-stack position with a focus on backend. I'm open to trying new technologies but I`m highly experienced in Ruby. I would love to share my knowledge, potentially in a technical leadership role\"",
		},
		Summary{
			Name:        "ONE_FACT",
			Title:       "One fact (outside of work) about me...",
			Description: "Example answer: \"I'm really into crypto and blockchain. I'm a founding member of the Berlin Crypto Club (BCC) and any chance I get to talk crypto is a moment that I revel in!\"",
		},
		Summary{
			Name:        "ADDITIONAL_INFORMATION",
			Title:       "Additional information",
			Description: "Feel free to add any extra information you`d like your new potential company to know.",
		},
	}
}

// #endregion

// #region Models

//ValueModel ...
type ValueModel struct {
	SocialMedia []SocialMedia `json:"socialMedia"`
	SummaryList []Summary     `json:"summaryList"`
}

//SocialMedia ...
type SocialMedia struct {
	Name        string `json:"name"`
	Placeholder string `json:"placeholder"`
}

//Summary ...
type Summary struct {
	Name        string `json:"name"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

// #endregion
