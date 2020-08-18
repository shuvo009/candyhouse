import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { IResumeStateModel, IResume } from "./modes";
import { HttpHelpers, ApiConstant } from '../../helpers';

export const defaultLoginState: IResumeStateModel = {
    accountId: '',
    educations: [],
    exceptedSalary: '',
    experiences: [],
    firstName: '',
    languages: [],
    lastName: '',
    location: '',
    negotiable: true,
    nextRoles: [],
    noticePeriod: '',
    phone: '',
    profileImage: '',
    skills: [],
    socialLinks: [],
    summaryList: [],
    totalYearOfExperience: 0,

    errorMessage: '',
    isBusy: false,
    lastPullTime: 0
}

const slice = createSlice({
    name: 'resumeStore',
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
        },

        onResumeGet: (state, action) => {
            return {
                ...state,
                ...action.payload,
                lastPullTime: new Date().getTime(),
                errorMessage: '',
                isBusy: false
            }
        }
    },
});

export default slice.reducer;

export const getProfile = (lastPullTime: number) => async (dispatch: Dispatch) => {
    try {
        const seconds = (new Date().getTime() - lastPullTime) / 1000;
        if (seconds < (5 * 60)) {
            return;
        }

        dispatch(slice.actions.changeBusyState({ data: true }));
        const response = await HttpHelpers.get<IResume>(ApiConstant.talentProfile);
        dispatch(slice.actions.onResumeGet(response));
    } catch (error) {
        dispatch(slice.actions.changeBusyState({ data: false }));
        dispatch(slice.actions.onError({ data: error.message }));
    }
}