import React from 'react'
import { Products } from '../../types/Product';
import ProductCard from './ProductCard'


type Props = {
    products: Products[];
}


export default function ProductList( {products }: Props ) {
  return (
    <div className="orders-list-container">
        <div className="orders-list-items ">          
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }           
        </div>
    </div>
  )
}
