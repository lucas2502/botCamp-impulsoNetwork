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
import BtnRobot from "../../components/BtnRobot";
import ChatBackground from "../../components/ChatBackground";


const Chat = () => {
        
        const [messages,setMessages] = useState([]);

        const addMessage = message => setMessages([
            ...messages, 
            message
        ]);

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
                    <BtnRobot/><MessageBotcamp>000.000.000-00</MessageBotcamp>
                    {
                        messages.map((message, i) => (
                            <MessageBotcamp key={i}>{message}</MessageBotcamp>
                        ))
                    }
                    
                </ChatBackground>

                <FooterChat>
                    <ChatInput 
                        addMessage={addMessage}
                        />
                    <BtnAttachment />
                    <BtnMicrophone />
                </FooterChat>
            </ChatWrapper>
       );
    }


export default Chat;