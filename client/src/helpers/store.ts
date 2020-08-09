import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import talentRegisterStore from "../features/register/components/TalentRegister/store"
const reducer = combineReducers({
    talentRegisterStore
})

export const store = configureStore({
    reducer: reducer,
})

export type IReducerState = ReturnType<typeof store.getState>;