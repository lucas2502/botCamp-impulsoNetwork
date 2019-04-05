import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "./App";
import Chat from "./Chat";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Chat" component={Chat} />
        </Switch>
    </BrowserRouter>
    , document.getElementById("root")
);