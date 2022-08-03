import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./core/components/Foooter";
import Navbar from "./core/components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";




const SystemRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
};


export default SystemRoutes;