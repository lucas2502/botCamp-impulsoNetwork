import React from 'react';
import styled from "styled-components";

const Input = styled.input.attrs({
    type: "text",
    placeholder: "Diz aí..."
})`
    box-sizing: border-box;
    border: none;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.33);
    width: 100vw;
    height: 50px;
    background-color: #fbfbff;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    padding: 14px 11px 14px 16px;

    ::after{
        
    }
`;



const ChatInput = () => (
    <Input />
);


export default ChatInput;