export interface ITalentRegisterModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export interface ITalentRegisterState extends ITalentRegisterModel {
    isBusy: boolean;
    isRegistrationSuccess: boolean;
    errorMessage: string;
}

export interface ITalentRegisterProps {
    talentRegistrationRequestAction: (registrationModel: ITalentRegisterState) => void
}