import styled from "styled-components";

import IconMicrophone from "../../img/iconfinder_icon-microphone.png";

export const Wrapper = styled.figure`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(238,62,37,0.83);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;

export const Microphone = styled.img.attrs({
    src: IconMicrophone,
    alt: "Icon Microphone"
})``;