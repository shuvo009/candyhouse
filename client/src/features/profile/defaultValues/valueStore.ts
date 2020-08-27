import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { IValueModel } from "./models";
import { HttpHelpers, ApiConstant } from '../../../helpers';

export const defaultValueState: IValueModel = {
    socialMedia: [],
    summaryList: [],
    idealRoles: [],
    lastPullTime: 0
}

const valueSlice = createSlice({
    name: 'valueStore',
    initialState: defaultValueState,
    reducers: {
        onValueStateUpdate: (state, action) => {
            return {
                ...state,
                ...action.payload,
                lastPullTime: new Date().getTime(),
            }
        }
    },
});

const valueReducer = valueSlice.reducer;
const valueActions = valueSlice.actions;

export { valueReducer };


export const getvalues = (lastPullTime: number) => async (dispatch: Dispatch) => {
    try {
        const seconds = (new Date().getTime() - lastPullTime) / 1000;
        if (seconds < (5 * 60)) {
            return;
        }
        const response = await HttpHelpers.get<IValueModel>(ApiConstant.values);
        dispatch(valueActions.onValueStateUpdate(response));
    } catch (error) {

    }
}