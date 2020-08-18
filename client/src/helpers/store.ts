import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import talentRegisterStore from "../features/register/components/TalentRegister/store"
import loginStore from "../features/login/store"
import profileStore from "../features/profileEdit/store"
import valuesStore from "../features/profileEdit/values/store"
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
export const history = createBrowserHistory()

const reducer = combineReducers({
    router: connectRouter(history),
    talentRegisterStore,
    loginStore,
    profileStore,
    valuesStore
})

export const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
})

export type IReducerState = ReturnType<typeof store.getState>;