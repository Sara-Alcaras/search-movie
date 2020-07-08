import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Head from './pages/Head';
import Register from './pages/Register';
import List from './pages/List';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Head} />
                <Route path="/register" component={Register} />
                <Route path="/list" component={List} />
            </Switch>
        </BrowserRouter>
    );
}