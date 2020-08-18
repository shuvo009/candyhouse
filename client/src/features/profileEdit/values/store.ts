import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { IValueModel } from "./models";
import { HttpHelpers, ApiConstant } from '../../../helpers';

export const defaultValueState: IValueModel = {
    socialMedia: [],
    lastPullTime: 0
}

const slice = createSlice({
    name: 'resumeStore',
    initialState: defaultValueState,
    reducers: {
        onValueGet: (state, action) => {
            return {
                ...state,
                ...action.payload,
                lastPullTime: new Date().getTime(),
            }
        }
    },
});

export default slice.reducer;


export const getvalues = (lastPullTime: number) => async (dispatch: Dispatch) => {
    try {
        const seconds = (new Date().getTime() - lastPullTime) / 1000;
        if (seconds < (5 * 60)) {
            return;
        }
        const response = await HttpHelpers.get<IValueModel>(ApiConstant.values);
        dispatch(slice.actions.onValueGet(response));
    } catch (error) {

    }
}