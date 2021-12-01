import React from 'react';

import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Main from '../src/pages/Main';
import Editar from '../src/pages/Editar';


const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/" exact component={ Main } />
            <Route path="/editar" exact component={ Editar } />
        </Switch>
    </BRouter>
);

export default Routes;