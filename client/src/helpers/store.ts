import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import talentRegisterStore from "../features/register/components/TalentRegister/store"
const reducer = combineReducers({
    talentRegisterStore
})
const store = configureStore({
    reducer,
})
export default store;

export type IReducerState = ReturnType<typeof store.getState>;