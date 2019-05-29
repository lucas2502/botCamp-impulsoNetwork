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
import MessageWrapper from "../../components/MessageWrapper";
import AvatarMessage from "../../components/AvatarMessage";






const Chat = () => {
    const [typing, setTyping] = useState("");
    const [messages, setMessages] = useState([]);
    

    const handleSubmit = (event) => {
        event.preventDefault();

        setMessages(old => [...old, typing])
        setTyping("");
        console.log("messages:",messages)
    }
    
    const handleChange = (event) => {
        setTyping(event.target.value);
        console.log("typing: ", typing)
    }
    
    return (
            <ChatWrapper>
                <ChatHeader>
                    <LogoBotcamp small />
                    <Link to="/">
                        <ChatLougout />
                    </Link>
                </ChatHeader>
                
                <MessageWrapper>
                    {
                        messages.map((msg, key) => <MessageBotcamp primary key={key}>{msg}</MessageBotcamp>)
                    }
                </MessageWrapper>

                <FormMessage onSubmit={handleSubmit}>
                    <ChatInput value={typing} onChange={handleChange}/>
                    <BtnAttachment />
                    <BtnMicrophone />
                </FormMessage>
            </ChatWrapper>
       );
}


export default Chat;