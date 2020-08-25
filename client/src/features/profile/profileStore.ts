import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { IProfileStateModel, IProfile } from "./modes";
import { HttpHelpers, ApiConstant, defaultReducer } from '../../helpers';

export const defaultProfileState: IProfileStateModel = {
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

const profileSlice = createSlice({
    name: 'profileStore',
    initialState: defaultProfileState,
    reducers: {
        ...defaultReducer,

        updateProfileState: (state, { payload }) => {
            return {
                ...state,
                ...payload.profile,
                lastPullTime: new Date().getTime(),
                errorMessage: '',
                isBusy: payload.isBusy
            }
        }
    },
});

const profileResucer = profileSlice.reducer;
const profileAction = profileSlice.actions;

export { profileResucer };

export const getProfile = (lastPullTime: number) => async (dispatch: Dispatch) => {
    try {
        const seconds = (new Date().getTime() - lastPullTime) / 1000;
        if (seconds < (5 * 60)) {
            return;
        }
        const profile = await HttpHelpers.get<IProfile>(ApiConstant.talentProfile);
        dispatch(profileAction.updateProfileState({ profile: profile, isBusy: true }));
    } catch (error) {
        dispatch(profileSlice.actions.onError({ data: error.message }));
    }
}

export const updateProfile = (resume: IProfile) => async (dispatch: Dispatch) => {
    try {
        dispatch(profileAction.updateProfileState({ resume: resume, isBusy: true }));
        await HttpHelpers.post<any>(ApiConstant.talentProfileUpdate, resume);
        dispatch(profileSlice.actions.changeBusyState({ data: false }));
    } catch (error) {
        dispatch(profileSlice.actions.onError({ data: error.message }));
    }
}

export const changeBusyState = (state: boolean) => (dispatch: Dispatch) => {
    dispatch(profileSlice.actions.changeBusyState({ data: state }));
}