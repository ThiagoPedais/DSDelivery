import React from 'react'
import { Products } from '../../types/Product';
import { checkIsSelected } from './helpers';
import ProductCard from './ProductCard'


type Props = {
    products: Products[];
    onSelectProduct: (product: Products) => void; 
    selectedProducts: Products[];   
}


export default function ProductList({ products, onSelectProduct, selectedProducts}: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items ">
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onSelectProduct={onSelectProduct}
                            isSelected={checkIsSelected(selectedProducts, product)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
