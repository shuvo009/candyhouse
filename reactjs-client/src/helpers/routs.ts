import { AuthencationLayout } from "../layouts/authencationLayout";
import { TalentLayout } from "../layouts/talentLayout";
import { Login } from "../features/login/login";
import { Register } from "../features/register/register";
import { Home } from "../features/home/home";
import { Profile } from "../features/profile/view/profile";
import { ProfileBasicInfoEdit } from "../features/profile/edit/profileBasicInfoEdit";
import { ProfileSummaryEdit } from "../features/profile/edit/profileSummaryEdit";
import { ProfileIdealRolesEdit } from "../features/profile/edit/profileIdealRolesEdit";
import { ProfileEditLocation } from "../features/profile/edit/profileEditLocation";
import { ProfileExperienceEdit } from "../features/profile/edit/profileExperienceEdit";
import { ProfileSkillEdit } from "../features/profile/edit/profileSkillEdit";
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
                { path: '/profile-edit-location', component: ProfileEditLocation },
                { path: '/profile-edit-experience', component: ProfileExperienceEdit },
                { path: '/profile-edit-skills', component: ProfileSkillEdit },
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