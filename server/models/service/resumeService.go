package service

import (
	"candyHouse/models/entity"

	"github.com/goonode/mogo"
	"labix.org/v2/mgo/bson"
)

//ResumeService ...
type ResumeService struct{}

//CreateBasicResume ...
func (resumeService *ResumeService) CreateBasicResume(firstName string, lastName string, accountID bson.ObjectId) error {

	resume := &entity.Resume{
		ID:        bson.NewObjectId(),
		AccountID: accountID,
		FirstName: firstName,
		LastName:  lastName,
		IsVisible: false,
	}

	newResume := mogo.NewDoc(resume).(*(entity.Resume))
	err := mogo.Save(newResume)
	return err
}
