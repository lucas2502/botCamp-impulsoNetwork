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


    const handeSubmit = (event) => {
        event.preventDefault();
        //messages.push(typing);
        setMessages([typing]);
        setTyping("");

        console.log(messages)
    }

    const handleChange = (event) => {
        event.preventDefault();
        setTyping(event.target.value);
    }
    
       return (
           <>
            <ChatWrapper>
                <ChatHeader>
                    <LogoBotcamp small />
                    <Link to="/">
                        <ChatLougout />
                    </Link>
                </ChatHeader>
                
                <MessageWrapper>
                    {
                        messages.map(msg => <MessageBotcamp primary >{msg}</MessageBotcamp>)
                    }
                    
                </MessageWrapper>

                <FormMessage onSubmit={handeSubmit}>
                    <ChatInput value={typing} onChange={handleChange}/>
                    <BtnAttachment />
                    <BtnMicrophone />
                </FormMessage>
            </ChatWrapper>
        </>
       )
}


export default Chat;