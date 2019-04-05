import React from "react";

import ChatWrapper from "../../components/ChatWeapper";
import ChatHeader  from "../../components/ChatHeader";
import ChatLougout from "../../components/ChatLogout";
import LogoBotcamp from "../../components/LogoBotcamp";
import FooterChat from "../../components/FooterChat";
import ChatInput from "../../components/ChatInput";
import BtnAttachment from "../../components/BtnAttachment";
import BtnMicrophone from "../../components/BtnMicrophone";


const Chat = () => (
    <ChatWrapper>
        <ChatHeader>
            <LogoBotcamp small />
            <ChatLougout />
        </ChatHeader>
        <FooterChat>
            <ChatInput/>
            <BtnAttachment />
            <BtnMicrophone />
        </FooterChat>
    </ChatWrapper>
);


export default Chat;