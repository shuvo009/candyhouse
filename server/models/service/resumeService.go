package service

import (
	"candyHouse/models/entity"
	"candyHouse/models/repository"

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
	resumeRepository := new(repository.ResumeRepository)
	resume, err := resumeRepository.Create(resume)
	return err
}

//UpdateResume ...
func (resumeService *ResumeService) UpdateResume(accountID string, resume entity.Resume) error {
	resumeRepository := new(repository.ResumeRepository)
	err := resumeRepository.UpdateResume(accountID, resume)
	return err
}

//GetResume ...
func (resumeService *ResumeService) GetResume(accountID string) (*entity.Resume, error) {
	resumeRepository := new(repository.ResumeRepository)
	dbResume, err := resumeRepository.FindByID(accountID)
	return dbResume, err
}
