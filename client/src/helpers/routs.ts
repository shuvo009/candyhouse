import { AuthencationLayout } from "../layouts/authencationLayout";
import { Login } from "../features/login/login";
import { Register } from "../features/register/register";
export class Routes {

    public get GetRoutes(): IRouteLayoutModel[] {
        return [
            this.AuthRoutes()
        ]
    }


    private AuthRoutes(): IRouteLayoutModel {
        return {
            layout: AuthencationLayout,
            subRoutes: [
                { path: '/login', component: Login },
                { path: '/register', component: Register }
            ]
        }
    }
}

interface IRouteLayoutModel {
    layout: any,
    subRoutes: ISubRouteModel[]
}

interface ISubRouteModel {
    path: string;
    component: any;
    exact?: any;
}