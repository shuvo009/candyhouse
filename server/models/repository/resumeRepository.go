package repository

import (
	"candyHouse/models/db"
	"candyHouse/models/entity"
	"errors"
	"time"

	"github.com/Kamva/mgm"
)

//ResumeRepository ...
type ResumeRepository struct{}

//Create ...
func (resumeRepository *ResumeRepository) Create(resume *entity.Resume) (*entity.Resume, error) {
	db.Connect()
	err := mgm.Coll(&entity.Resume{}).Create(resume)
	db.Disconnect()
	return resume, err
}

//FindByID ...
func (resumeRepository *ResumeRepository) FindByID(accountID string) (*entity.Resume, error) {
	db.Connect()
	resume := &entity.Resume{}
	var err = mgm.Coll(resume).FindByID(accountID, resume)
	if err != nil {
		return nil, errors.New("Resume is not found")
	}
	db.Disconnect()
	return resume, err
}

//UpdateResume ...
func (resumeRepository *ResumeRepository) UpdateResume(accountID string, resume entity.Resume) error {
	db.Connect()
	dbResume := &entity.Resume{}
	var err = mgm.Coll(dbResume).FindByID(accountID, dbResume)
	if err != nil {
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
	var mongoError = mgm.Coll(dbResume).Update(dbResume)
	db.Disconnect()
	return mongoError
}
