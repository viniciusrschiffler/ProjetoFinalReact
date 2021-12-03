import React from 'react';

import {
    BrowserRouter as BRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Editar from './pages/editar';


const RoutesComponent = () => (
    <BRouter>
        <Routes>
            <Route path="/perfil" element={<Home />} />
            <Route path="/editar" element={<Editar />} />
        </Routes>
    </BRouter>
);

export default RoutesComponent;