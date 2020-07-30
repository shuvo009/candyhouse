package service

import (
	"candyHouse/models/entity"
	"errors"
	"time"

	"github.com/goonode/mogo"
	"labix.org/v2/mgo/bson"
)

//ResumeService ...
type ResumeService struct{}

//CreateBasicResume ...
func (resumeService *ResumeService) CreateBasicResume(firstName string, lastName string, accountID bson.ObjectId) error {

	resume := &entity.Resume{
		AccountID: accountID,
		FirstName: firstName,
		LastName:  lastName,
		IsVisible: false,
	}

	newResume := mogo.NewDoc(resume).(*(entity.Resume))
	err := mogo.Save(newResume)
	return err
}

//UpdateResume ...
func (resumeService *ResumeService) UpdateResume(accountID bson.ObjectId, resume entity.Resume) error {
	dbResume := mogo.NewDoc(entity.Resume{}).(*(entity.Resume))
	if mongoErr := dbResume.FindOne(bson.M{"accountId": accountID}, dbResume); mongoErr != nil {
		return errors.New("Resume is not found")
	}
	dbResume.FirstName = resume.FirstName
	dbResume.LastName = resume.LastName
	dbResume.Location = resume.Location
	dbResume.Phone = resume.Phone
	dbResume.SocialLinks = resume.SocialLinks
	dbResume.SummaryList = resume.SummaryList
	dbResume.NextRoles = resume.NextRoles
	dbResume.TotalYearOfExperience = resume.TotalYearOfExperience
	dbResume.Experiences = resume.Experiences
	dbResume.Languages = resume.Languages
	dbResume.Skills = resume.Skills
	dbResume.NoticePeriod = resume.NoticePeriod
	dbResume.ExceptedSalary = resume.ExceptedSalary
	dbResume.Negotiable = resume.Negotiable
	dbResume.Educations = resume.Educations
	dbResume.LastUpdate = time.Now().Unix()
	err := mogo.Save(dbResume)
	return err
}

//GetResume ...
func (resumeService *ResumeService) GetResume(accountID bson.ObjectId) (*entity.Resume, error) {
	dbResume := mogo.NewDoc(entity.Resume{}).(*(entity.Resume))
	if mongoErr := dbResume.FindOne(bson.M{"accountId": accountID}, dbResume); mongoErr != nil {
		return nil, errors.New("Resume is not found")
	}

	return dbResume, nil
}
