package service

import (
	"candyHouse/models/entity"
	"candyHouse/models/viewmodels"
	"candyHouse/utils"
	"errors"
	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
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
		ID:                    bson.NewObjectId(),
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
	if err = mogo.Save(account); err == nil {
		resumeService := ResumeService{}
		err = resumeService.CreateBasicResume(talentRegister.FirstName, talentRegister.LastName, account.ID)
	}

	return err
}

//TalentLogin ...
func (accountService *AccountService) TalentLogin(loginModel viewmodels.LoginModel) (string, error) {

	user := mogo.NewDoc(entity.Account{}).(*(entity.Account))
	mongoErr := user.FindOne(bson.M{"email": loginModel.Username}, user)
	if mongoErr != nil {
		return "", errors.New("Username or password is invalid")
	}

	passwordErr := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginModel.Password))
	if passwordErr != nil {
		return "", errors.New("Username or password is invalid")
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": string(user.Email),
	})

	secretKey := utils.EnvVar("TOKEN_KEY")
	tokenString, err := token.SignedString([]byte(secretKey))
	log.Println(tokenString, err)

	return tokenString, err
}
