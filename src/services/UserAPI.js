import _ from "lodash";
import Config from "constants/config";
import Axios from "axios";

// Axios.defaults.withCredentials = true;

const UserAPI = {
    Register: async (body = {}) => {
        const { data } = await Axios.post(
            `${Config.BASE_URL}/register`,
            body
        );
        return data
    },
    Login: async (body = {}) => {
        const { data } = await Axios.post(
            `${Config.BASE_URL}/login`,
            body
        );
        return data
    }
}

export default UserAPI;
