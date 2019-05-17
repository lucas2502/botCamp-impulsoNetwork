import styled from "styled-components";

import IconMicrophone from "../../img/iconfinder_icon-microphone.png";

const BtnMicrophone = styled.img.attrs({
    src: IconMicrophone,
    alt: "Icone Microphone"
})`
    border-radius: 50%;
    width: 20px;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #ee3e25;
    padding: 10px 11px;
    display: flex;
`;

export default BtnMicrophone;
