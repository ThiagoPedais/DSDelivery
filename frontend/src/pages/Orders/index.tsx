import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { OrderLocationData, Products } from '../../types/Product';
import { fetchProducts, saveOrder } from '../../utils/request';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './styles.scss'

export default function Orders() {

  const [products, setProducts] = useState<Products[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Products[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();




  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0)


  useEffect(() => {
    fetchProducts()
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      })
      .catch(err => {
        toast.warning('Erro ao listar produtos');
        console.log(err)
      })
  }, [])

  const handleSelectProduct = (product: Products) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }

    saveOrder(payload)
      .then((res) => {
        toast.error(`Pedido enviado com sucesso! Nº ${res.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }


  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
      <OrderSummary
        amount={selectedProducts.length}
        totalPrice={totalPrice}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
