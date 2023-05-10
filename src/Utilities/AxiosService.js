import axios, { AxiosInstance } from "axios";
import { basUrl } from "../Constants/Constants";

export const axiosConfig = {
    baseUrl: basUrl
};



export class AxiosService {
    static baseUrl = '';
    static instance = null;
    static init({ baseUrl }) {
        const instance = axios.create({
            baseURL: baseUrl,
        });



        instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function (response) {

            return response;
        }, function (error) {



            return Promise.reject(error);
        });


        this.instance = instance;

    }

    static get(url, params) {
        if (params) {
            return this.instance?.get(url, params);
        }
        return this.instance?.get(url);
    }

    static post(url, payload, config) {
        return this.instance?.post(url, payload, config);
    }

    static put() { }

    static delet() { }
}
