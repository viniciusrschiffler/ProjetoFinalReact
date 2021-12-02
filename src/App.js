import GlobalStyle from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login";
import Products from "./pages/Produto";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import MovieRegistration from "./pages/MovieRegistration";
import CadastroCliente from "./pages/Cliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/movie-registration" element={<MovieRegistration />} />
        <Route path="/cliente/cadastro" element={<CadastroCliente />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
