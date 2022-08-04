import { Products } from '../../types/Product';
import { formatPrice } from '../../utils/format';


type Props = {
    product: Products;
    onSelectProduct: (product: Products) => void;    
    isSelected: boolean;

}

export default function ProductCard( { product, onSelectProduct, isSelected }: Props ) {
    return (
        <div className={`order-card-container ${isSelected ? 'selected' : '' } `} onClick={() => onSelectProduct(product)}>
            <div className="">
                <h3 className="order-card-title">{product.name}</h3>
                <img className="order-card-image" src={product.imageUri} alt={product.name} />
                <h3 className="order-card-price">R$ {formatPrice(product.price)}</h3>
                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>

        
    )
}
