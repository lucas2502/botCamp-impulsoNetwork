import React from "react";

import ChatWrapper from "../../components/ChatWeapper";
import ChatHeader  from "../../components/ChatHeader";
import ChatLogo from "../../components/ChatLogo";
import ChatLougout from "../../components/ChatLogout";


const Chat = () => (
    <ChatWrapper>
        <ChatHeader>
            <ChatLogo />
            <ChatLougout />
        </ChatHeader>
    </ChatWrapper>
);


export default Chat;