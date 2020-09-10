export const defaultReducer = {
    onError: (state: any, {payload}:any) => {
        return {
            ...state,
            isBusy: false,
            errorMessage: payload.data
        }
    },

    changeBusyState: (state: any, { payload }: any) => {
        return {
            ...state,
            errorMessage: '',
            isBusy: payload.data
        }
    },
}