export interface IValueModel {
    socialMedia: ISocialMedia[];
    summaryList: ISummary[];
    idealRoles: string[];
    expriences: IExprience[];
    lastPullTime: number;
    positions: string[];
    jobLocations: string[];
    languages: string[];
    languageFluency: string[];
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

export interface IExprience {
    key: string;
    value: string;
}