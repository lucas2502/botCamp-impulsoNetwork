import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import "./styles/style.css"
import Login from "./pages/Login";
import Chat from './pages/Chat';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} />
                    <Route path="/Chat" component={Chat} />
                    <Route path="*" component={Login} />
                </Switch>
            </BrowserRouter>    
        );
    }
}

export default App;

/*
class App extends Component {
    render() {
        return <Login/>
    }
}

export default App;*/