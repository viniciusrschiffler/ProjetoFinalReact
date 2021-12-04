import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/global";

import Login from "../pages/Login";
import Products from "../pages/Produto";
import Cart from "../pages/Cart";
import MovieRegistration from "../pages/MovieRegistration";
import CadastroCliente from "../pages/Cliente";
import Home from "../pages/Home"

import Perfil from '../pages/Perfil';
import Editar from '../pages/EditarPerfil';

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/products/:type/:idFilme" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/movie-registration" element={<MovieRegistration />} />
                <Route path="/cliente/cadastro" element={<CadastroCliente />} />
                <Route path="/home" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/editar" element={<Editar />} />
            </Routes>

            <GlobalStyle />
        </BrowserRouter>
    )
}

export default RoutesComponent;