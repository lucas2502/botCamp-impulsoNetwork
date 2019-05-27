import React, { useState } from "react";
import { Link } from 'react-router-dom'

import ChatWrapper from "../../components/ChatWeapper";
import ChatHeader  from "../../components/ChatHeader";
import ChatLougout from "../../components/ChatLogout";
import LogoBotcamp from "../../components/LogoBotcamp";
import FooterChat from "../../components/FooterChat";
import ChatInput from "../../components/ChatInput";
import BtnAttachment from "../../components/BtnAttachment";
import BtnMicrophone from "../../components/BtnMicrophone";
import MessageBotcamp from "../../components/MessageBotCamp";
import AvatarRobot from "../../components/AvatarRobot";
import ChatBackground from "../../components/ChatBackground";


const Chat = () => {
        
        const handleKeyUp = (event) => {
            if (event.keyCode == 13) return this.sendData()
            console.log(event.keyCode)
        }

       return (
            <ChatWrapper>
                <ChatHeader>
                    <LogoBotcamp small />
                    <Link to="/">
                        <ChatLougout />
                    </Link>
                </ChatHeader>
                <ChatBackground>
                    <MessageBotcamp primary >!cpf</MessageBotcamp>
                </ChatBackground>

                <ChatBackground>
                    <AvatarRobot/><MessageBotcamp>000.000.000-00</MessageBotcamp>
                </ChatBackground>

                <FooterChat>
                    <ChatInput />
                    <BtnAttachment />
                    <BtnMicrophone />
                </FooterChat>
            </ChatWrapper>
       );
    }


export default Chat;