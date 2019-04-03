import styled from "styled-components"

const BtnBotcamp = styled.button.attrs({
    children: (props) => props.content
}) `
    width: 280px;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    background-color: #ee3e25;
    text-transform: uppercase;
    margin: 0px 47px 80px 50px;
    :hover {
        color: #ee3e25;
        background-color: #fff;
    }
`;

export default BtnBotcamp;


/*import React from 'react';
import "./style.css";

const BtnBotcamp = ({content}) => (
    <button className="btn-botcamp">{content}</button>
);

export default BtnBotcamp; */