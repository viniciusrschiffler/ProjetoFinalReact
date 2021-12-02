import React from 'react';

import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Editar from './pages/editar';


const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/editar" exact component={ Editar } />
        </Switch>
    </BRouter>
);

export default Routes;