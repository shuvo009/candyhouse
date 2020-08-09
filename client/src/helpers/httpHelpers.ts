import axios from "axios";

export class HttpHelpers {

    static async get<T>(api: string): Promise<T> {
        return new Promise((resolve, reject) => {
            axios.get(api).then((response) => {
                resolve(response.data);
            }).catch((err) => {
                if (err.response) {
                    reject({ message: err.response.data.error })
                } else
                    reject({ message: 'An error occured' })
            });
        });
    }

    static async post<T>(api: string, body?: any): Promise<T> {
        return new Promise((resolve, reject) => {
            axios.post(api, body).then((response) => {
                resolve(response.data);
            }).catch((err) => {
                if (err.response) {
                    reject({ message: err.response.data.error })
                } else
                    reject({ message: 'An error occured' })
            });
        });
    }
}