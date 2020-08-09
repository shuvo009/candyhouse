import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { ITalentRegisterState, ITalentRegisterModel } from "./models"
import { HttpHelpers, ApiConstant, Routes } from "../../../../helpers"
import { Utility } from '../../../../helpers/utility';
import { push } from 'connected-react-router';

export const talentRegisterState: ITalentRegisterState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmpassword: '',
    isBusy: false,
    isRegistrationSuccess: false,
    errorMessage: '',
    isFormValid: false
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
    const validationMessage = validateModel(talentRegisterModel);
    if (validationMessage) {
        dispatch(slice.actions.onError({ data: validationMessage }))
        return;
    }

    try {
        dispatch(slice.actions.changeBusyState({ data: true }))
        const body = {
            firstName: talentRegisterModel.firstName,
            lastName: talentRegisterModel.lastName,
            email: talentRegisterModel.email,
            password: talentRegisterModel.password,
        }
        await HttpHelpers.post<any>(ApiConstant.talentRegister, body);
        dispatch(slice.actions.registerSuccess())
        dispatch(push(Routes.login))
    } catch (error) {
        dispatch(slice.actions.changeBusyState({ data: false }))
        dispatch(slice.actions.onError({ data: error.message }))
    }
}

/* #region  Supported Methods */

const validateModel = (talentRegisterModel: ITalentRegisterModel): string => {
    if (!Utility.ValidateEmail(talentRegisterModel.email)) {
        return 'Email address is not valid';
    }

    if (talentRegisterModel.password.length < 8) {
        return 'Minimum password length is 8';
    }

    if (talentRegisterModel.password !== talentRegisterModel.confirmpassword) {
        return 'Password is not match';
    }

    return '';

}

/* #endregion */