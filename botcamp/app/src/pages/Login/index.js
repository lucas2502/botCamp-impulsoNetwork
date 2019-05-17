import React from "react";
import { Link } from 'react-router-dom'

import LoginWrapper from "../../components/LoginWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import BtnBotcamp from "../../components/BtnBotcamp";



const Login = () => (
    <LoginWrapper>
        <LogoBotcamp />
        <Link to="/Chat">
            <BtnBotcamp content="Entrar" />
        </Link>
    </LoginWrapper>
);

export default Login;