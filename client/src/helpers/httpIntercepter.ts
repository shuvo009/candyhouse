import axios from "axios"
import { LocalStorageHelper } from "./localStorageHelper"
export class HttpIntercepter {

    static init() {
        axios.defaults.baseURL = process.env.REACT_APP_API_BASE;

        axios.interceptors.request.use(config => {
            const accessToken = LocalStorageHelper.AccessToken;
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            config.headers['Content-Type'] = 'application/json;charset=UTF-8';
            return config;
        }, error => {
            Promise.reject(error)
        })
    }
}