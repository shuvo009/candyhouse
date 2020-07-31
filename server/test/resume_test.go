package test

import (
	"candyHouse/models/entity"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetMyResume(t *testing.T) {
	mongoServer, router := testSetup()
	setupTestAccount(router)
	//accessToken := getTestTalentAccessToken(router)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/talent/resume/my", nil)
	//req.Header.Add("Authentication", "Bearer "+accessToken)
	router.ServeHTTP(w, req)

	resume := entity.Resume{}
	body, _ := ioutil.ReadAll(w.Body)

	json.Unmarshal([]byte(string(body)), &resume)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "shuvo", resume.FirstName)

	mongoServer.Stop()
}
