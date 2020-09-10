package middlewares

import (
	"fmt"
	"net/http"
	"strings"

	"candyHouse/service"
	"candyHouse/utils"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

//Authentication is for auth middleware
func Authentication() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.Request.Header.Get("Authorization")
		if len(authHeader) == 0 {
			c.JSON(400, gin.H{
				"error": "Authentication header is missing",
			})
			return
		}
		temp := strings.Split(authHeader, "Bearer")
		// fmt.Println("token lenght is ", len(temp))
		if len(temp) < 2 {
			c.JSON(400, gin.H{"error": "Invalid token"})
		}
		tokenString := strings.TrimSpace(temp[1])
		fmt.Println("tokenString is ", tokenString)
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			secretKey := utils.EnvVar("TOKEN_KEY")
			return []byte(secretKey), nil
		})

		if err != nil {
			c.JSON(401, gin.H{
				"error": err.Error(),
			})
			return
		}
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			email := claims["email"].(string)
			accountservice := service.AccountService{}
			account, err := accountservice.FindByEmail(email)
			if err != nil {
				c.JSON(402, gin.H{
					"error": "User not found",
				})
				return
			}
			c.Set("account", account)
			c.Next()
		} else {
			c.JSON(400, gin.H{
				"error": "Token is not valid",
			})
		}
	}
}

//ErrorHandler is for global error
func ErrorHandler(c *gin.Context) {
	c.Next()
	if len(c.Errors) > 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"errors": c.Errors,
		})
	}
}
