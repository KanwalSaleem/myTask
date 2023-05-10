import { AxiosService } from "./AxiosService"


export class Configurations {

    static init(initConfig) {
        this.initAxios(initConfig.axiosConfig);
    }

    static initAxios(config) {
        AxiosService.init(config)
    }



}