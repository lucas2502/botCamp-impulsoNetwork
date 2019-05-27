import React from "react";

import AvatarRobot from "../AvatarRobot";
import MessageBotcamp from "../MessageBotCamp";

import { Wrapper } from "./style"

const AvatarMessage = ({ content }) => (
    <Wrapper>
        <AvatarRobot/>
        <MessageBotcamp>{ content }</MessageBotcamp>
    </Wrapper>

);

export default AvatarMessage;