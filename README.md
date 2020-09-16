## CandyHouse (Reactjs, Typescript, Golang, MongoDb)

This Project is a clone of [Honeypot](https://www.honeypot.io/) (only candidate profile section). Honeypot is developer-focused job platform.

This project is developed using Reactjs, Typescript, Golang and MongoDb for learning purpose only. 

## Project Goals
* [Create Clean Architecture For API Server With Golang](https://github.com/shuvo009/candyhouse/tree/master/golang-server)
* [Create Clean Architecture For API Frontend With React and TypeScript](https://github.com/shuvo009/candyhouse/tree/master/reactjs-client)
* [Create Integration Test API Server](https://github.com/shuvo009/candyhouse/tree/master/golang-server/test/)

## Technologies are used
* [Golang](https://golang.org/)
  * [Gin Web Framework](https://github.com/gin-gonic/gin)
  * [Mongo Go Models](https://github.com/Kamva/mgm)
  * [Mongo Driver](https://godoc.org/go.mongodb.org/mongo-driver/mongo/options)
  * [jwt-go](https://github.com/dgrijalva/jwt-go)
  * [GoDotEnv](https://github.com/joho/godotenv)
* [ReactJs](https://reactjs.org/)
  * [Typescript](https://www.typescriptlang.org)
  * [React-Redux](https://react-redux.js.org/)
  * [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
  * [Connected React Router](https://github.com/supasate/connected-react-router)
  * [axios](https://github.com/axios/axios)
  * [React Bootstrap](https://react-bootstrap.github.io/)
  * [node-sass](https://github.com/sass/node-sass)
  * [lodash](https://lodash.com/)
* [API Server Integration Test](https://github.com/shuvo009/candyhouse/tree/master/golang-server/test/)
  * [memongo](https://github.com/benweissmann/memongo) *Does not support windows :worried:
  
## Run Golang Server
- Step 1: Create a free MongoDb database at https://www.mongodb.com/cloud/atlas
- Step 2: create a **.env** file at root directory of server (**golang-server**) with below variables. (Please change database configurations)
```
SERVER_PORT=':3200'
DB_CONNECTION_STRING='mongodb+srv://xxxxxxxx.mongodb.net/candyHouse?retryWrites=true&w=majority'
DB_NAME='candyHouse'
IN_MEMORY_MONGO_DB_PATH='F:\inMemoryMongoDb4.2.8\bin\mongod.exe'
TOKEN_KEY='Your_Auth_Token_Encryption_KEY'
```
- Step 3: go get
- Step 6: go get main.go
## Run Reactjs Client
- Step 1: create a **.env** file at root directory of client (**reactjs-client**) with below variables.
```
REACT_APP_API_BASE=http://127.0.0.1:3200
```
- Step 2: npm install
- Step 3: npm start

## Golang Server Directory Structure
```
.
|-- controllers
|-- middlewares
|-- models
|   |-- entity
|   `-- viewmodels
|-- profilepic
|-- repository
|   `-- db
|-- routers
|-- service
|-- test
`-- utils
```


Enjoy!! :blush:
