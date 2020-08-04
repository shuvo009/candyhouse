import axios from "axios";

export class HttpHelpers {

    static async get<T>(api: string): Promise<T> {
        const { data } = await axios.get(api);
        return JSON.parse(data) as T;
    }

    static async post<T>(api: string, body?: any): Promise<T> {
        const { data } = await axios.post(api, body);
        return JSON.parse(data) as T;
    }
}