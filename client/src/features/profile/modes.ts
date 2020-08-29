import { IBaseState } from "../../common/models";
import { IValueModel } from "./defaultValues/models";

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
    sequence: number;
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

export interface IEducation {
    institute: string;
    degree: string;
    passYear: string;
}

export interface IProfile {
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

export interface IProfileStateModel extends IBaseState, IProfile {
    lastPullTime: number;
}

export interface IProfileProps {
    resumeStateModel: IProfileStateModel;
    valuesModel: IValueModel;
    changeBusyState(state: boolean): void;
    getProfile(lastPullTime: number): Promise<void>;
    getValues(lastPullTime: number): Promise<void>;
    updateProfile(resume: IProfile): Promise<void>;
}