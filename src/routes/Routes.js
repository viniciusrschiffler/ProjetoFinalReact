import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/global";

import Login from "../pages/Login";
import Products from "../pages/Produto";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";
import MovieRegistration from "../pages/MovieRegistration";
import CadastroCliente from "../pages/Cliente";
import Home from "../pages/Home"

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/products/:idFilme" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/nav" element={<Navbar />} />
                <Route path="/movie-registration" element={<MovieRegistration />} />
                <Route path="/cliente/cadastro" element={<CadastroCliente />} />
                <Route path="/home" element={<Home />} />
            </Routes>

            <GlobalStyle />
        </BrowserRouter>
    )
}

export default RoutesComponent;