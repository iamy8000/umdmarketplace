import _ from "lodash";
import Config from "constants/config";
import Axios from "axios";

// Axios.defaults.withCredentials = true;

const ProductAPI = {
    GetProducts: async () => {
        const { data } = await Axios.get(
            `${Config.BASE_URL}/product`,
        )
        return data
    },
    GetProduct: async (product_id) => {
        const { data } = await Axios.get(
            `${Config.BASE_URL}/product/${product_id}`,
        )
        return data
    },
    AddProduct: async (body = {}) => {
        const data = await Axios.post(
            `${Config.BASE_URL}/addProduct`,
            body
        );
        return data
    },
    GetPendingProduct: async (user_id) => {
        const { data } = await Axios.post(
            `${Config.BASE_URL}/productPending`,
            {
                user_id
            }
        );
        return data
    },
    GetHotProducts: async () => {
        const { data } = await Axios.get(
            `${Config.BASE_URL}/productHot`,
        );
        return data
    },
}

export default ProductAPI;