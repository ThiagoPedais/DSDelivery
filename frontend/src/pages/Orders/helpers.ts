import { Products } from "../../types/Product";

export const checkIsSelected = (selectedProducts: Products[], product: Products) => {
    return selectedProducts.some(item => item.id === product.id);
}