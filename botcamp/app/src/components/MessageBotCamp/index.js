import styled from "styled-components";


const MessageBotcamp = styled.p`
    font-family: Roboto, sans-serif;
    background-color: ${props => props.primary ? "rgba(238, 62, 37, 0.83)" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#000"};
    padding: 10px 15px;
    width: 68%;
    margin: 0 10px 20px ${props => props.primary ? "auto" : "10px"};
    border-radius: ${ props => props.primary ? 
        "10px 0 10px 10px" : 
        "0 10px 10px 10px"};
    display: flex;
    border: 1px solid #d7d7ea;
    &:first-child {
        margin-top: 50px;
    }
 
`;

export default MessageBotcamp;