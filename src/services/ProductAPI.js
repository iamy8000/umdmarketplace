import _ from "lodash";
import Config from "constants/config";
import Axios from "axios";

// Axios.defaults.withCredentials = true;

const ProductAPI = {
    AddProduct: async (body = {}) => {
        const data = await Axios.post(
            `${Config.BASE_URL}/addProduct`,
            body
        );
        return data
    },
    GetPendingProduct: async (body = {}) => {
        const { data } = await Axios.get(
            `${Config.BASE_URL}/productPending`,
            body
        );
        return data
    },
}

export default ProductAPI;