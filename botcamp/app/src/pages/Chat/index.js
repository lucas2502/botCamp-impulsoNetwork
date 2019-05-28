import React, { useState } from "react";
import { Link } from 'react-router-dom'

import ChatWrapper from "../../components/ChatWeapper";
import ChatHeader  from "../../components/ChatHeader";
import ChatLougout from "../../components/ChatLogout";
import LogoBotcamp from "../../components/LogoBotcamp";
import FormMessage from "../../components/FormMessage";
import ChatInput from "../../components/ChatInput";
import BtnAttachment from "../../components/BtnAttachment";
import BtnMicrophone from "../../components/BtnMicrophone";
import MessageBotcamp from "../../components/MessageBotCamp";
import AvatarRobot from "../../components/AvatarRobot";
import MessageWrapper from "../../components/MessageWrapper";
import AvatarMessage from "../../components/AvatarMessage";

const handeSubmit = (event) => {
    event.preventDefault();
}

const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
}

const Chat = () => {

       return (
            <ChatWrapper>
                <ChatHeader>
                    <LogoBotcamp small />
                    <Link to="/">
                        <ChatLougout />
                    </Link>
                </ChatHeader>
                
                <MessageWrapper>
                    <MessageBotcamp primary >!cpf</MessageBotcamp>
                    <AvatarMessage content="00.000.000-00"/>
                </MessageWrapper>

                <FormMessage onSubmit={handeSubmit}>
                    <ChatInput onChange={handleChange}/>
                    <BtnAttachment />
                    <BtnMicrophone />
                </FormMessage>
            </ChatWrapper>
       );
    }


export default Chat;