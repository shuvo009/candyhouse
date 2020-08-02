package test

import (
	"bytes"
	"candyHouse/models/db"
	"candyHouse/models/entity"
	"candyHouse/models/viewmodels"
	"candyHouse/routers"
	"candyHouse/utils"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/httptest"

	"github.com/benweissmann/memongo"
	"github.com/gin-gonic/gin"
)

//LoginResponse ...
type LoginResponse struct {
	Token string `json:"token"`
	Error string `json:"error"`
}

//testSetup ...
func testSetup() (*memongo.Server, *gin.Engine) {
	binPath := utils.TestEnvVar("IN_MEMORY_MONGO_DB_PATH")

	mongoServer, err := memongo.StartWithOptions(&memongo.Options{
		MongodBin:      binPath,
		StartupTimeout: 500000,
	})

	if err != nil {
		log.Println(err)
	}

	db.SetConnectionInfo(mongoServer.URI(), memongo.RandomDatabase())
	router := routers.InitRoute()
	return mongoServer, router
}

//setupTestAccount ...
func setupTestAccount(router *gin.Engine) {
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
}

//getTestTalentAccessToken ...
func getTestTalentAccessToken(router *gin.Engine) string {
	loginModel := &viewmodels.LoginModel{
		Username: "shuvo009@yahoo.com",
		Password: "123456",
	}

	buf := new(bytes.Buffer)
	json.NewEncoder(buf).Encode(loginModel)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/talent/login", buf)
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	router.ServeHTTP(w, req)

	loginResponse := LoginResponse{}
	body, _ := ioutil.ReadAll(w.Body)

	json.Unmarshal([]byte(string(body)), &loginResponse)

	return loginResponse.Token
}

//GetResume ...
func GetResume(accessToken string, router *gin.Engine) entity.Resume {
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/talent/resume/my", nil)
	req.Header.Add("Authentication", "Bearer "+accessToken)
	router.ServeHTTP(w, req)

	resume := entity.Resume{}
	body, _ := ioutil.ReadAll(w.Body)

	json.Unmarshal([]byte(string(body)), &resume)
	return resume
}
