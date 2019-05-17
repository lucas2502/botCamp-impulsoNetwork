import styled from "styled-components";

import IconRobot from "../../img/robot.png"

const BtnRobot = styled.img.attrs({
    src: IconRobot,
    alt: "Icone Microphone"
})`
    border-radius: 50%;
    width: 10vw;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #26265e;
    padding: 10px;
    display: flex;
`;

export default BtnRobot;
