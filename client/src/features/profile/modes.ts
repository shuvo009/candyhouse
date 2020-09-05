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
    startDate: string;
    endDate: string;
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

export interface IJobLocation {
    name: string;
    exceptedSalary: number;
}

export interface IProfile {
    accountId: string;
    firstName: string;
    lastName: string;
    address: string;
    jobLocation: IJobLocation[];
    phone: string;
    socialLinks: ISocialLink[];
    profileImage: string;
    summaryList: ISummary[];
    employmentType: string[]
    nextRoles: INextRole[];
    totalYearOfExperience: number;
    experiences: IExperience[];
    languages: ILanguage[];
    skills: string[];
    noticePeriodType: string;
    noticePeriod: string;
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