interface IStateModel {
    isBusy: boolean;
    isRegistrationSuccess: boolean;
    errorMessage: string;
}
export interface ITalentRegisterModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export interface ITalentRegisterState extends ITalentRegisterModel, IStateModel {
    isFormValid: boolean;
}

export interface ITalentRegisterProps extends IStateModel {
    talentRegistrationRequestAction: (registrationModel: ITalentRegisterState) => void
}