import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { ITalentRegisterState, ITalentRegisterModel } from "./models"
import { HttpHelpers, ApiConstant } from "../../../../helpers"
export const talentRegisterState: ITalentRegisterState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmpassword: '',
    isBusy: false,
    isRegistrationSuccess: false,
    errorMessage: '',
    isFormValid : false
}

const slice = createSlice({
    name: 'talentRegistationStore',
    initialState: talentRegisterState,
    reducers: {
        onError: (state, action) => {
            return {
                ...state,
                isBusy: false,
                errorMessage: action.payload.data
            }
        },

        changeBusyState: (state, action) => {
            return {
                ...state,
                errorMessage: '',
                isBusy: action.payload.data
            }
        },

        registerSuccess: (state) => {
            return {
                ...state,
                errorMessage: '',
                isBusy: false,
                isRegistrationSuccess: true
            }
        }
    },
});

export default slice.reducer

export const talentRegister = (talentRegisterModel: ITalentRegisterModel) => async (dispatch: Dispatch) => {
    if (talentRegisterModel.password !== talentRegisterModel.confirmpassword) {
        dispatch(slice.actions.onError({ data: 'Password is not match' }))
        return;
    }
    try {
        dispatch(slice.actions.changeBusyState({ data: true }))
        await HttpHelpers.post<any>(ApiConstant.talentRegister, talentRegister);
        dispatch(slice.actions.registerSuccess())
    } catch (error) {
        dispatch(slice.actions.changeBusyState({ data: false }))
        dispatch(slice.actions.onError(error))
    }
}