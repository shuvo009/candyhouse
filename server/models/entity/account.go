package entity

import (
	"github.com/goonode/mogo"
)

//Account struct is to handle user data
type Account struct {
	mogo.DocumentModel    `bson:",inline" coll:"accounts"`
	Email                 string `idx:"{email},unique" json:"email" binding:"required"`
	Password              string `json:"password" binding:"required"`
	IsActive              bool   `json:"isActive"`
	IsEmailVerified       bool   `json:"isEmailVerified"`
	IsPhoneVerified       bool   `json:"isPhoneVerified"`
	Role                  string `json:"role"`
	EmailVerificationCode string `json:"emailVerificationCode"`
	JoinDate              int64  `json:"joinDate"`
}
