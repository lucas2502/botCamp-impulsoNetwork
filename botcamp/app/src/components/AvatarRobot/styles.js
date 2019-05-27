import styled from "styled-components";

import IconRobot from "../../img/robot.png";

export const Wrapper = styled.figure`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #26265e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;

export const Avatar = styled.img.attrs({
    src: IconRobot,
    alt: "Icone Robot"
})`
    
`;

