import _ from "lodash";
import Config from "constants/config";
import Axios from "axios";

// Axios.defaults.withCredentials = true;

const UserAPI = {
    Register: async () => {
        try {
            const data = await Axios.post(
                `${Config.BASE_URL}/register`,
                {
                    email: "test555@email.com",
                    password: "123456",
                    phone: "1112223333",
                    user_name: "testuser555"
                }
            );  
            return data
        } catch (e) {
            console.log('Register error: ', e)
        }
    }
}

export default UserAPI;
