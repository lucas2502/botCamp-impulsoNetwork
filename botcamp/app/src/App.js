import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import "./styles/style.css"
import Login from "./pages/Login";

class App extends Component {
    render() {
        return <Login/>
    }
}

export default App;

/**
 * chat robot
 * send message by enter
 */