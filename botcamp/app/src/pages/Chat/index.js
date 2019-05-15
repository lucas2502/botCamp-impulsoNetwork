import React from "react";
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


const Chat = () => (
    <ChatWrapper>
        <ChatHeader>
            <LogoBotcamp small />
            <Link to="/">
                <ChatLougout />
            </Link>
        </ChatHeader>
        <div>
            <MessageBotcamp>!cpf</MessageBotcamp>
            <MessageBotcamp>!rg</MessageBotcamp>
            <MessageBotcamp>!end</MessageBotcamp>
        </div>
        <FooterChat>
            <ChatInput/>
            <BtnAttachment />
            <BtnMicrophone />
        </FooterChat>
    </ChatWrapper>
);


export default Chat;