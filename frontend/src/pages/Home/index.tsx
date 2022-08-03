import main from '../../core/assets/images/main.svg';
import './styles.scss';

export default function Home() {
    return (
        <div className="container home-container">
            <div className="home-content">
                <div className="home-actions">
                    <div className="d-flex">
                        <div className="titles">
                            <h1 className="home-title">
                                Faça seu pedido <br /> que entregamos <br /> pra você !!
                            </h1>
                            <h3 className="home-subtitle">
                                Escolha o seu pedido e em poucos minutos <br /> levaremos na sua porta
                            </h3>
                            <button className="home-btn-order">Fazer pedido</button>
                        </div>
                        <div className="home-image">
                            <img src={main} alt="img-main" />
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
