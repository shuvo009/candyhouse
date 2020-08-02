package repository

import (
	"candyHouse/models/entity"
	"candyHouse/repository/db"

	"github.com/Kamva/mgm"
	"go.mongodb.org/mongo-driver/bson"
)

//AccountRepository ...
type AccountRepository struct{}

//Create ...
func (accountRepository *AccountRepository) Create(account *entity.Account) (*entity.Account, error) {
	db.Connect()
	err := mgm.Coll(&entity.Account{}).Create(account)
	db.Disconnect()
	return account, err
}

//FindByEmail ...
func (accountRepository *AccountRepository) FindByEmail(email string) (*entity.Account, error) {

	db.Connect()
	accountModel := &entity.Account{}
	coll := mgm.Coll(accountModel)
	var err = coll.FindOne(mgm.Ctx(), bson.M{"email": email}).Decode(accountModel)
	db.Disconnect()
	return accountModel, err
}
