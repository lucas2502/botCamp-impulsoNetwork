import styled from "styled-components";

import logoBotCamp from "../../img/botcamp.svg";

const ChatLogo = styled.img.attrs({
    src: logoBotCamp,
    alt: "Logo bot camp"
})`
    width: 200px;
    height: 31.5px;
    padding: 10px 16px 24.5px ; 
`;

export default ChatLogo;