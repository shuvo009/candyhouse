package service

import (
	"candyHouse/models/entity"
	"candyHouse/repository"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

//ResumeService ...
type ResumeService struct{}

//CreateBasicResume ...
func (resumeService *ResumeService) CreateBasicResume(firstName string, lastName string, accountID primitive.ObjectID) error {

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
func (resumeService *ResumeService) UpdateResume(accountID primitive.ObjectID, resume entity.Resume) error {
	resumeRepository := new(repository.ResumeRepository)
	err := resumeRepository.UpdateResume(accountID, resume)
	return err
}

//GetResume ...
func (resumeService *ResumeService) GetResume(accountID primitive.ObjectID) (*entity.Resume, error) {
	resumeRepository := new(repository.ResumeRepository)
	dbResume, err := resumeRepository.FindByID(accountID)
	return dbResume, err
}
