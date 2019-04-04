import React from "react";

import ChatWrapper from "../../components/ChatWeapper";
import ChatHeader  from "../../components/ChatHeader";
import ChatLougout from "../../components/ChatLogout";
import LogoBotcamp from "../../components/LogoBotcamp";


const Chat = () => (
    <ChatWrapper>
        <ChatHeader>
            <LogoBotcamp small />
            <ChatLougout />
        </ChatHeader>
    </ChatWrapper>
);


export default Chat;