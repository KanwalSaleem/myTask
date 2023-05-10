import { UserEndPoints } from "../EndPoints/UserEndPoints";
import { AxiosService } from "../Utilities/AxiosService";


export class UserActions {

    static async getUsers() {
        const res = await AxiosService.get(UserEndPoints.get.getUsers());
        let users = res?.data;
        return users;
    }

}