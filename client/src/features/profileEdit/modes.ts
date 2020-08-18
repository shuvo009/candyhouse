import { IBaseState } from "../../common/models";
import { IValueModel } from "./values/models"
export interface ISocialLink {
    name: string;
    link: string;
}

export interface ISummary {
    type: string;
    description: string;
}

export interface INextRole {
    role: string;
    experience: string;
    sequence: string;
}

export interface IExperience {
    company: string;
    title: string;
    startDate: number;
    endDate: number;
    isCurrentlyWorking: boolean;
    hideFromThisCompany: boolean;
    description: string;
    techStack: string[];
}


export interface ILanguage {
    name: string;
    level: string;
}

//Education ...
export interface IEducation {
    institute: string;
    degree: string;
    passYear: string;
}

export interface IResume {
    accountId: string;
    firstName: string;
    lastName: string;
    location: string;
    phone: string;
    socialLinks: ISocialLink[];
    profileImage: string;
    summaryList: ISummary[];
    nextRoles: INextRole[];
    totalYearOfExperience: number;
    experiences: IExperience[];
    languages: ILanguage[];
    skills: string[];
    noticePeriod: string;
    exceptedSalary: string;
    negotiable: boolean;
    educations: IEducation[];
}

export interface IResumeStateModel extends IBaseState, IResume {
    lastPullTime: number;
}

export interface IResumeProps {
    resumeStateModel: IResumeStateModel;
    valuesModel: IValueModel;
    getProfile(lastPullTime: number): Promise<void>;
    getValues(lastPullTime: number): Promise<void>;
    updateProfile(resume: IResume): Promise<void>;
}