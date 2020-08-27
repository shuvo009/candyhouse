export interface IValueModel {
    socialMedia: ISocialMedia[];
    summaryList: ISummary[];
    idealRoles: string[];
    lastPullTime: number;
}

export interface ISocialMedia {
    name: string,
    placeholder: string,
}

export interface ISummary {
    name: string;
    title: string;
    description: string;
}