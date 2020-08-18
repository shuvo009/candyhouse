export interface IValueModel {
    socialMedia: ISocialMedia[];
    lastPullTime:number;
}

export interface ISocialMedia {
    name: string,
    placeholder: string,
}