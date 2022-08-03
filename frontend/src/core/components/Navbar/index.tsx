import { Link } from 'react-router-dom';
import logo from '../../../core/assets/images/logo.svg';
import './styles.scss';


export default function Navbar() {
  return (
    <div className="bg-primary d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="d-flex my-2 my-md-0 mr-md-3">
          <img src={logo} alt="logo" />
          <Link to="/"><h1 className="fs-3 text-white ms-2 textLogo">DS Delivery</h1></Link>
        </nav>
      </div>
    </div>
  )
}
