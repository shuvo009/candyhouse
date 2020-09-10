import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { ILoginStateModel, ILoginModel, ILoginResponse } from "./models"
import { HttpHelpers, ApiConstant, Routes, LocalStorageHelper } from "../../helpers"
import { push } from 'connected-react-router';
import { Utility } from '../../helpers/utility';

export const defaultLoginState: ILoginStateModel = {
    username: '',
    password: '',
    isBusy: false,
    errorMessage: '',
    isFormValid: false
}

const slice = createSlice({
    name: 'loginStore',
    initialState: defaultLoginState,
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
        }
    },
});

export default slice.reducer;

export const login = (loginModel: ILoginModel) => async (dispatch: Dispatch) => {
    try {
        if (!Utility.ValidateEmail(loginModel.username)) {
            dispatch(slice.actions.onError({ data: 'Email address is not valid' }));
            return;
        }

        dispatch(slice.actions.changeBusyState({ data: true }))
        const response = await HttpHelpers.post<ILoginResponse>(ApiConstant.talentLogin, loginModel);
        LocalStorageHelper.AccessToken = response.token;
        dispatch(push(Routes.root))
    } catch (error) {
        dispatch(slice.actions.changeBusyState({ data: false }))
        dispatch(slice.actions.onError({ data: error.message }))
    }
}

export const reset = () => async (dispatch: Dispatch) => {
    dispatch(slice.actions.changeBusyState({ data: false }))
}

