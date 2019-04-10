import styled from "styled-components";
import logoBotcamp from "../../img/botcamp.png";

const LogoBotcamp = styled.img.attrs({
    src: logoBotcamp,
    alt: "Logo do BotCamp"
}) `
    width: ${props => (props.small ? "200px" : "248px")};
    height: ${props => (props.small ? "31.5px" : "39px")};
    padding: ${props => (props.small ? "" : "120px 63px 378px 64px")};
    `;

export default LogoBotcamp;
