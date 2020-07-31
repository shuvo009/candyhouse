package db

import (
	"github.com/Kamva/mgm"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var _connectionString string = ""
var _dbName string = ""

//SetConnectionInfo connection datbase when application start
func SetConnectionInfo(connectionString string, dbName string) {
	_connectionString = connectionString
	_dbName = dbName
}

//Connect ...
func Connect() {
	_ = mgm.SetDefaultConfig(nil, _dbName, options.Client().ApplyURI(_connectionString))
}

//Disconnect ...
func Disconnect() {
	_, client, _, _ := mgm.DefaultConfigs()
	client.Disconnect(mgm.Ctx())
}
