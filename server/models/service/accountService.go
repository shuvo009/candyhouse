package service

import (
	"candyHouse/models/entity"
	"candyHouse/models/viewmodels"
	"errors"
	"log"
	"time"

	"github.com/goonode/mogo"
	"golang.org/x/crypto/bcrypt"
	"labix.org/v2/mgo/bson"
)

//AccountService is to handel account reation db query
type AccountService struct{}

//TalentRegister is to register user
func (accountService *AccountService) TalentRegister(talentRegister viewmodels.TalentRegister) error {

	doc := mogo.NewDoc(entity.Account{}).(*(entity.Account))
	err := doc.FindOne(bson.M{"email": talentRegister.Email}, doc)
	if err == nil {
		return errors.New("Already Exist")
	}
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(talentRegister.Password), bcrypt.MinCost)
	if err != nil {
		log.Fatal(err)
		return errors.New("Already Exist")
	}

	acc := &entity.Account{
		Email:                 talentRegister.Email,
		Password:              string(hashPassword),
		EmailVerificationCode: "",
		IsActive:              true,
		IsEmailVerified:       false,
		IsPhoneVerified:       false,
		JoinDate:              time.Now().Unix(),
		Role:                  "talent",
	}

	account := mogo.NewDoc(acc).(*(entity.Account))
	err = mogo.Save(account)
	return err
}
