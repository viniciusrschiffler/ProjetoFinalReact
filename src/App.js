import GlobalStyle from "./styles/global";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './pages/Login';
import Products from './pages/Produto';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;