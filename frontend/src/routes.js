import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Head from './pages/Head';
import Register from './pages/Head';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Head} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}