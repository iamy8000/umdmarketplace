import _ from "lodash";
import Config from "constants/config";
import Axios from "axios";

// Axios.defaults.withCredentials = true;

const CategoryAPI = {
    GetCategories: async () => {
        const { data } = await Axios.get(
            `${Config.BASE_URL}/category`,
        );
        return data
    },
    GetCategoryDetail: async (category_id) => {
        const { data } = await Axios.get(
            `${Config.BASE_URL}/categorydetail/${category_id}`,
        );
        return data
    }
}

export default CategoryAPI;