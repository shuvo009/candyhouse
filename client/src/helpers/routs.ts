import { AuthencationLayout } from "../layouts/authencationLayout";
import { TalentLayout } from "../layouts/talentLayout";
import { Login } from "../features/login/login";
import { Register } from "../features/register/register";
import { Home } from "../features/home/home";
import { Profile } from "../features/profile/profile";
import { ProfileBasicInfoEdit } from "../features/profileEdit/profileBasicInfoEdit";
import { ProfileSummaryEdit } from "../features/profileEdit/profileSummaryEdit";
import { ProfileIdealRolesEdit } from "../features/profileEdit/profileIdealRolesEdit";
export class Routes {

    public get GetRoutes(): IRouteLayoutModel[] {
        return [
            this.AuthRoutes(),
            this.TalentRoutes()
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

    private TalentRoutes(): IRouteLayoutModel {
        return {
            layout: TalentLayout,
            subRoutes: [
                { path: '/profile', component: Profile },
                { path: '/profile-edit-basic-info', component: ProfileBasicInfoEdit },
                { path: '/profile-edit-summary', component: ProfileSummaryEdit },
                { path: '/profile-edit-ideal-roles', component: ProfileIdealRolesEdit },
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