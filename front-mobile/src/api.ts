import axios from "axios";

const BASE_URL = 'https://dsdeliver-thiagopedais.herokuapp.com';

export function fetchOrders() {
    return(
        axios(`${BASE_URL}/orders`)
    );
};

export function confirmDelivery(orderId: number) {
    return(
        axios.put(`${BASE_URL}/orders/${orderId}/delivered`)
    );
};



