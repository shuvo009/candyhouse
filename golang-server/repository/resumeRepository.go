package repository

import (
	"candyHouse/models/entity"
	"candyHouse/repository/db"
	"errors"
	"time"

	"github.com/Kamva/mgm"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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
func (resumeRepository *ResumeRepository) FindByID(accountID primitive.ObjectID) (*entity.Resume, error) {
	db.Connect()
	resume := &entity.Resume{}
	coll := mgm.Coll(resume)

	var err = coll.FindOne(mgm.Ctx(), bson.M{"accountId": accountID}).Decode(resume)

	if err != nil {
		return nil, errors.New("Resume is not found")
	}
	db.Disconnect()
	return resume, err
}

//UpdateResume ...
func (resumeRepository *ResumeRepository) UpdateResume(accountID primitive.ObjectID, resume entity.Resume) error {
	db.Connect()
	dbResume := &entity.Resume{}
	coll := mgm.Coll(dbResume)

	var err = coll.FindOne(mgm.Ctx(), bson.M{"accountId": accountID}).Decode(dbResume)
	if err != nil {
		return errors.New("Resume is not found")
	}

	dbResume.FirstName = resume.FirstName
	dbResume.LastName = resume.LastName
	dbResume.JobLocation = resume.JobLocation
	dbResume.ProfileImage = resume.ProfileImage
	dbResume.Phone = resume.Phone
	dbResume.Pitch = resume.Pitch
	dbResume.Address = resume.Address
	dbResume.SocialLinks = resume.SocialLinks
	dbResume.SummaryList = resume.SummaryList
	dbResume.NextRoles = resume.NextRoles
	dbResume.TotalYearOfExperience = resume.TotalYearOfExperience
	dbResume.Experiences = resume.Experiences
	dbResume.Languages = resume.Languages
	dbResume.EmploymentType = resume.EmploymentType
	dbResume.Skills = resume.Skills
	dbResume.NoticePeriod = resume.NoticePeriod
	dbResume.NoticePeriodType = resume.NoticePeriodType
	dbResume.Negotiable = resume.Negotiable
	dbResume.Educations = resume.Educations
	dbResume.LastUpdate = time.Now().Unix()
	var mongoError = mgm.Coll(dbResume).Update(dbResume)
	db.Disconnect()
	return mongoError
}

//UpdatePic ...
func (resumeRepository *ResumeRepository) UpdatePic(accountID primitive.ObjectID, fileName string) (*entity.Resume, error) {
	db.Connect()
	dbResume := &entity.Resume{}
	coll := mgm.Coll(dbResume)

	var err = coll.FindOne(mgm.Ctx(), bson.M{"accountId": accountID}).Decode(dbResume)
	if err != nil {
		return nil, errors.New("Resume is not found")
	}

	dbResume.ProfileImage = fileName
	dbResume.LastUpdate = time.Now().Unix()
	var _ = mgm.Coll(dbResume).Update(dbResume)
	db.Disconnect()
	return dbResume, err
}
