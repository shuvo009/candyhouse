package entity

import (
	"github.com/goonode/mogo"
	"labix.org/v2/mgo/bson"
)

//Account struct is to handle user data
type Account struct {
	mogo.DocumentModel    `bson:",inline" coll:"accounts"`
	ID                    bson.ObjectId `json:"_id,omitempty"`
	Email                 string        `json:"email"`
	Password              string        `json:"password" binding:"required"`
	IsActive              bool          `json:"isActive"`
	IsEmailVerified       bool          `json:"isEmailVerified"`
	IsPhoneVerified       bool          `json:"isPhoneVerified"`
	Role                  string        `json:"role"`
	EmailVerificationCode string        `json:"emailVerificationCode"`
	JoinDate              int64         `json:"joinDate"`
}
