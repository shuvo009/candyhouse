package entity

import (
	"github.com/Kamva/mgm"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

//SocialLink ...
type SocialLink struct {
	Name string `json:"name"`
	Link string `json:"link"`
}

//Summary ...
type Summary struct {
	Type        string `json:"type"`
	Description string `json:"description"`
}

//NextRole ...
type NextRole struct {
	Role       string `json:"role"`
	Experience string `json:"experience"`
	Sequence   int    `json:"sequence"`
}

//Experience ...
type Experience struct {
	Company             string   `json:"company"`
	Title               string   `json:"title"`
	StartDate           int      `json:"startDate"`
	EndDate             int      `json:"endDate"`
	IsCurrentlyWorking  bool     `json:"isCurrentlyWorking"`
	HideFromThisCompany bool     `json:"hideFromThisCompany"`
	Description         string   `json:"description"`
	TechStack           []string `json:"techStack"`
}

//Language ...
type Language struct {
	Name  string `json:"name"`
	Level string `json:"level"`
}

//Education ...
type Education struct {
	Institute string `json:"institute"`
	Degree    string `json:"degree"`
	PassYear  string `json:"passYear"`
}

//Resume ...
type Resume struct {
	mgm.DefaultModel      `bson:",inline" coll:"resumes"`
	AccountID             primitive.ObjectID `bson:"accountId" json:"accountId"`
	FirstName             string             `json:"firstName"`
	LastName              string             `json:"lastName"`
	Location              string             `json:"location"`
	Phone                 string             `json:"phone"`
	SocialLinks           []SocialLink       `bson:"socialLinks" json:"socialLinks"`
	ProfileImage          string             `json:"profileImage"`
	SummaryList           []Summary          `bson:"summaryList" json:"summaryList"`
	NextRoles             []NextRole         `bson:"nextRoles" json:"nextRoles"`
	EmploymentType        []string           `bson:"employmentType" json:"employmentType"`
	TotalYearOfExperience int                `json:"totalYearOfExperience"`
	Experiences           []Experience       `bson:"experiences" json:"experiences"`
	Languages             []Language         `bson:"languages" json:"languages"`
	Skills                []string           `json:"skills"`
	NoticePeriod          string             `json:"noticePeriod"`
	ExceptedSalary        string             `json:"exceptedSalary"`
	Negotiable            bool               `json:"negotiable"`
	Educations            []Education        `bson:"educations" json:"educations"`
	ProfileHash           string             `json:"profileHash"`
	LastUpdate            int64              `json:"lastUpdate"`
	IsVisible             bool               `json:"isVisible"`
	FirstCheckBy          primitive.ObjectID `bson:"firstCheckBy" json:"firstCheckBy"`
	SecondCheckBy         primitive.ObjectID `bson:"secondCheckBy" json:"secondCheckBy"`
}
