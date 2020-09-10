package entity

import (
	"github.com/Kamva/mgm"
)

//Account struct is to handle user data
type Account struct {
	mgm.DefaultModel      `bson:",inline"`
	Email                 string `json:"email"`
	Password              string `json:"password" binding:"required"`
	IsActive              bool   `json:"isActive"`
	IsEmailVerified       bool   `json:"isEmailVerified"`
	IsPhoneVerified       bool   `json:"isPhoneVerified"`
	Role                  string `json:"role"`
	EmailVerificationCode string `json:"emailVerificationCode"`
	JoinDate              int64  `json:"joinDate"`
}
