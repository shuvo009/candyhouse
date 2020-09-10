package test

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

//TestGetMyResume ...
func TestGetMyResume(t *testing.T) {
	mongoServer, router := testSetup()
	setupTestAccount(router)
	accessToken := getTestTalentAccessToken(router)

	resume := GetResume(accessToken, router)

	assert.Equal(t, "shuvo", resume.FirstName)
	mongoServer.Stop()
}

//TestUpdateMyResume ...
func TestUpdateMyResume(t *testing.T) {
	mongoServer, router := testSetup()
	setupTestAccount(router)
	accessToken := getTestTalentAccessToken(router)

	resume := GetResume(accessToken, router)
	resume.FirstName = "jon updated"
	resume.Skills = []string{"C#", "JAVA"}

	buf := new(bytes.Buffer)
	json.NewEncoder(buf).Encode(resume)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/talent/resume/update", buf)
	req.Header.Add("Authentication", "Bearer "+accessToken)
	router.ServeHTTP(w, req)

	updatedResume := GetResume(accessToken, router)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "jon updated", updatedResume.FirstName)
	assert.Len(t, updatedResume.Skills, 2)

	mongoServer.Stop()
}
