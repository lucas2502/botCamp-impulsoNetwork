import styled from "styled-components";

import LogoutIcon from "../../img/iconfinder_logout.png";

const ChatLougout = styled.img.attrs({
    src: LogoutIcon,
    alt: "Botão sair"
})`
    width: 30px;
    height: 30px;
    padding: 11px 22px 30px;
`;

export default ChatLougout;