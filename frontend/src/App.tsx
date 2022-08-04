import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import SystemRoutes from "./Routes";

function App() {

  return (
    <>
      <SystemRoutes />
      <ToastContainer />
    </>
  )
}

export default App
