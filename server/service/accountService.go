package service

import (
	"candyHouse/models/entity"
	"candyHouse/models/viewmodels"
	"candyHouse/repository"
	"candyHouse/utils"
	"errors"
	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

//AccountService is to handel account reation db query
type AccountService struct{}

//TalentRegister is to register user
func (accountService *AccountService) TalentRegister(talentRegister viewmodels.TalentRegister) error {

	accountRepository := new(repository.AccountRepository)

	_, err := accountRepository.FindByEmail(talentRegister.Email)

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

	account, createError := accountRepository.Create(acc)

	if createError == nil {
		resumeService := ResumeService{}
		err = resumeService.CreateBasicResume(talentRegister.FirstName, talentRegister.LastName, account.ID)
	}

	return err
}

//TalentLogin ...
func (accountService *AccountService) TalentLogin(loginModel viewmodels.LoginModel) (string, error) {
	accountRepository := new(repository.AccountRepository)
	user, mongoErr := accountRepository.FindByEmail(loginModel.Username)

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

//FindByEmail ...
func (accountService *AccountService) FindByEmail(email string) (*entity.Account, error) {

	accountRepository := new(repository.AccountRepository)
	user, mongoErr := accountRepository.FindByEmail(email)

	if mongoErr != nil {
		return nil, errors.New("email is invalid")
	}
	return user, nil
}
