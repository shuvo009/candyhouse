package test

import (
	"candyHouse/controllers"
	"candyHouse/routers"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

//TestGetMyResume ...
func TestGetvalues(t *testing.T) {
	router := routers.InitRoute()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/values", nil)
	router.ServeHTTP(w, req)

	values := controllers.ValueModel{}
	body, _ := ioutil.ReadAll(w.Body)

	json.Unmarshal([]byte(string(body)), &values)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, 4, len(values.SocialMedia))
}
