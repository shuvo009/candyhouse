package service

import (
	"candyHouse/models/db"
	"candyHouse/models/entity"
	"errors"

	"github.com/goonode/mogo"
	"labix.org/v2/mgo/bson"
)

//AccountService is to handel account reation db query
type AccountService struct{}

//Create is to register user
func (accountService *AccountService) Create() error {

	email := "a@a.com"
	password := "123456"

	conn := db.GetConnection()
	defer conn.Session.Close()
	doc := mogo.NewDoc(entity.Account{}).(*(entity.Account))
	err := doc.FindOne(bson.M{"email": "a@a.com"}, doc)
	if err == nil {
		return errors.New("Already Exist")
	}
	acc := new(entity.Account)
	acc.Email = email
	acc.Password = password

	account := mogo.NewDoc(acc).(*(entity.Account))
	err = mogo.Save(account)
	return err
}
