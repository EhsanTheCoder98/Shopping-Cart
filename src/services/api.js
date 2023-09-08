import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getData = async () => {
    const data = await axios.get(`${BASE_URL}/products`);
    return data.data;
}

export {getData};