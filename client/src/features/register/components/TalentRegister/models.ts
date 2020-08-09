import { IBaseState } from "../../../../common/models"

export interface ITalentRegisterModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export interface ITalentRegisterState extends ITalentRegisterModel, IBaseState {
    isFormValid: boolean;
}

export interface ITalentRegisterProps extends IBaseState {
    talentRegistrationRequestAction: (registrationModel: ITalentRegisterState) => void
}