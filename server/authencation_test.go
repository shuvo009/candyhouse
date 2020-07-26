package main

import (
	"bytes"
	"candyHouse/models/db"
	"candyHouse/models/viewmodels"
	"candyHouse/routers"
	"candyHouse/utils"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

//	binPath := utils.EnvVar("IN_MEMORY_MONGO_DB_PATH")
// mongoServer, err := memongo.StartWithOptions(&memongo.Options{
// 	MongodBin: binPath,
// })
// if err != nil {
// 	t.Fatal(err)
// }
// defer mongoServer.Stop()

var router *gin.Engine = nil

func TestMain(m *testing.M) {
	cons := utils.EnvVar("TEST_DB_URI")
	name := utils.EnvVar("TEST_DB")
	db.ConnectToDatabase(cons, name)
	router = routers.InitRoute()

	exitVal := m.Run()
	log.Println("Do stuff AFTER the tests!")

	os.Exit(exitVal)
}

// /talent/register/
func TestTalentRegister(t *testing.T) {

	talentRegisterModel := &viewmodels.TalentRegister{
		Email:     "shuvo009@yahoo.com",
		FirstName: "shuvo",
		LastName:  "hasan",
		Password:  "123456",
	}
	buf := new(bytes.Buffer)
	json.NewEncoder(buf).Encode(talentRegisterModel)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/talent/register", buf)
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)
}

func TestB(t *testing.T) {
	log.Println("TestB running")
}
