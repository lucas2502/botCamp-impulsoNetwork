import React, { Component } from "react";
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


class Chat extends Component {
   
    state = {
        commandMessages: [],
        searchInputText: '',
        id: 1
    }

    onKeyDown = (e) => {
        console.log(e.key);
        if (e.key === 'Enter' ) {
            
            const { commandMessages, searchInputText , id } = this.state

            this.setStates({
                commandMessages: [
                    ...commandMessages,
                    {
                        id,
                        text: searchInputText
                    }
                ],
                searchInputText: '',
                id: id + 1,
            })
        }
    }

    onChange = (e) => {
        this.setState({ searchInputText: e.target.value })
    }

   render(){

    const { commandMessages, searchInputText } = this.state

       return (
            <ChatWrapper>
                <ChatHeader>
                    <LogoBotcamp small />
                    <Link to="/">
                        <ChatLougout />
                    </Link>
                </ChatHeader>
                <ChatBackground>
                    {
                        commandMessages.map(
                            message => 
                            <MessageBotcamp primary key={message.id}> 
                                {message.text} 
                            </MessageBotcamp>)
                    }
                </ChatBackground>
                <FooterChat>
                    <ChatInput 
                        onKeyDown={this.onKeyDown}
                        onChange={this.onChange}
                        value={searchInputText}
                    />
                    <BtnAttachment />
                    <BtnMicrophone />
                </FooterChat>
            </ChatWrapper>
       );
    }
   
};


export default Chat;