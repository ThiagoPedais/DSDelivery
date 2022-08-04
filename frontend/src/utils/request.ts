import axios from "axios"
import { OrderPayload } from "../types/Product";
const BASE_URL = "http://localhost:8080";
const mapboxToken = import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX;


export const fetchProducts = () => {
    return axios(`${BASE_URL}/products`);
}

export const fetchLocalMapBox = (local: string) => {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export const saveOrder = (payload: OrderPayload) => {
    return axios.post(`${BASE_URL}/orders`, payload);
}