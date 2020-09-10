package main

import (
	"candyHouse/repository/db"
	"candyHouse/routers"
	"candyHouse/utils"
)

func main() {
	r := routers.InitRoute()
	port := utils.EnvVar("SERVER_PORT")

	connectionString := utils.EnvVar("DB_CONNECTION_STRING")
	dbName := utils.EnvVar("DB_NAME")

	db.SetConnectionInfo(connectionString, dbName)

	r.Run(port) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

//https://medium.com/@devcrazy/golang-gin-jwt-mogo-mongodb-orm-golang-authentication-example-52c3c1189488
//https://github.com/devcrazygit/goseed
//https://medium.com/@mvmaasakkers/writing-integration-tests-with-mongodb-support-231580a566cd
