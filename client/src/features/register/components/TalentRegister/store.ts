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
    errorMessage: ''
}

const slice = createSlice({
    name: 'talentRegistationStore',
    initialState: talentRegisterState,
    reducers: {
        onError: (state, action) => {
            state.isBusy = false;
            state.errorMessage = action.payload
        },

        changeBusyState: (state, action) => {
            state.errorMessage = '';
            state.isBusy = action.payload;
        },
        registerSuccess: (state, action) => {
            state.errorMessage = '';
            state.isBusy = false;
            state.isRegistrationSuccess = true;
        }
    },
});

export default slice.reducer

export const talentRegister = (talentRegisterModel: ITalentRegisterModel) => async (dispatch: Dispatch) => {
    if (talentRegisterModel.password !== talentRegisterModel.confirmpassword) {
        dispatch(slice.actions.onError('Password is not match'))
        return;
    }
    try {
        dispatch(slice.actions.changeBusyState(true))
        await HttpHelpers.post<any>(ApiConstant.talentRegister, talentRegister);
        dispatch(slice.actions.registerSuccess(undefined))
    } catch (error) {
        dispatch(slice.actions.changeBusyState(false))
        dispatch(slice.actions.onError(error))
    }
}