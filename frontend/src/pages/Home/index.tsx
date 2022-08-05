import { Link } from 'react-router-dom';
import main from '../../core/assets/images/main.svg';
import './styles.scss';

export default function Home() {
    return (
        <div className="container home-container">
            <div className="home-content">
                {/* <div className="home-actions"> */}
                    <div className="h d-flex">
                        <div className="titles">
                            <div className="only-titles">
                            <h1 className="home-title">
                                Faça seu pedido que entregamos pra você !!
                            </h1>
                            <h3 className="home-subtitle">
                                Escolha o seu pedido e em poucos minutos levaremos na sua porta
                            </h3>
                            </div>
                          
                            <Link to="/orders">
                                <button className="home-btn-order">Fazer pedido</button>
                            </Link>
                        </div>
                        <div className="home-image">
                            <img src={main} alt="img-main" className="igmSvg" />
                        </div>
                    </div>


                {/* </div> */}
            </div>
        </div>
    )
}
