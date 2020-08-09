import { IBaseState } from "../../common/models"
export interface ILoginModel {
    username: string;
    password: string;
}

export interface ILoginStateModel extends IBaseState, ILoginModel {
    isFormValid: boolean;
}

export interface ILoginPorps extends IBaseState {
    loginRequestAction: (loginModel: ILoginModel) => void
    redirectToRegister: () => void
}

export interface ILoginResponse {
    token: string
}