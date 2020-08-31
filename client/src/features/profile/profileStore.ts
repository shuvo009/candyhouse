import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { IProfileStateModel, IProfile } from "./modes";
import { HttpHelpers, ApiConstant } from '../../helpers';

export const defaultProfileState: IProfileStateModel = {
    accountId: '',
    educations: [],
    experiences: [],
    firstName: '',
    languages: [],
    lastName: '',
    address: '',
    jobLocation: [],
    negotiable: true,
    nextRoles: [],
    employmentType: [],
    noticePeriodType: 'now',
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
        changeBusyState: (state: any, { payload }: any) => {
            return {
                ...state,
                errorMessage: '',
                isBusy: payload.data
            }
        },
        onError: (state: any, { payload }: any) => {
            return {
                ...state,
                isBusy: false,
                errorMessage: payload.data
            }
        },
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

export const updateProfile = (profile: IProfile) => async (dispatch: Dispatch) => {
    try {
        dispatch(profileAction.updateProfileState({ profile: profile, isBusy: true }));
        await HttpHelpers.post<any>(ApiConstant.talentProfileUpdate, profile);
        dispatch(profileSlice.actions.changeBusyState({ data: false }));
    } catch (error) {
        dispatch(profileSlice.actions.onError({ data: error.message }));
    }
}

export const changeBusyState = (state: boolean) => (dispatch: Dispatch) => {
    dispatch(profileSlice.actions.changeBusyState({ data: state }));
}

export const onPicRemove = (profile: IProfile) => async (dispatch: Dispatch) => {
    try {
        dispatch(profileSlice.actions.changeBusyState({ data: true }));
        profile.profileImage = '';
        await HttpHelpers.post<any>(ApiConstant.talentProfileUpdate, profile);
        dispatch(profileAction.updateProfileState({ profile: profile, isBusy: false }));
    } catch (error) {
        dispatch(profileSlice.actions.onError({ data: error.message }));
    }
}

export const onPicSet = (file: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(profileSlice.actions.changeBusyState({ data: true }));
        const response = await HttpHelpers.uploadImage<IProfile>(ApiConstant.talentPicUpdate, file);
        dispatch(profileAction.updateProfileState({ profile: response, isBusy: false }));
    } catch (error) {
        dispatch(profileSlice.actions.onError({ data: error.message }));
    }

}