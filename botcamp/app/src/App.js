import React, { Component } from "react";
import { Link } from 'react-router-dom'

import "./styles/style.css"
import Login from "./pages/Login";


class App extends Component {
    render() {
        return (
                <Link to="/Chat">
                    <Login/>
                </Link>
        )
    }
}

export default App;