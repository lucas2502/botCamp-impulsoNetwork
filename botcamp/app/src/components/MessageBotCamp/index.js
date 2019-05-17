import styled from "styled-components";


const MessageBotcamp = styled.p`
    font-family: Roboto, sans-serif;
    background-color: ${props => props.primary ? "rgba(238, 62, 37, 0.83)" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#000"};
    padding: 10px 15px;
    width: 68%;
    margin: 0 16px 20px 10px;
    margin-left: ${props => props.primary ? "auto" : "" };
    margin-right: ${props => props.primary ? "" : "auto" };
    margin-top: 30px;
    border-radius: ${ props => props.primary ? 
        "10px 0 10px 10px" : 
        "0 10px 10px 10px"};
    display: flex;
    &:first-child {
        margin-top: 50px;
    }
 
`;

export default MessageBotcamp;