import { useEffect, useState } from 'react'
import { OrderLocationData, Products } from '../../types/Product';
import { fetchProducts } from '../../utils/request';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './styles.scss'

export default function Orders() {

    const [ products, setProducts ] = useState<Products[]>([]);
    const [ orderLocation, setOrderLocation ] = useState<OrderLocationData>();


    useEffect(() => {
        fetchProducts()
        .then(res => {
            setProducts(res.data)
            console.log(res.data)})            
        .catch(err => console.log(err))
    }, [])


  return (
    <div className="orders-container">
        <StepsHeader />
        <ProductList products={products} />
        <OrderLocation onChangeLocation={ location => setOrderLocation(location) } />
    </div>
  )
}
