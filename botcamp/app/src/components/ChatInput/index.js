import styled from "styled-components";

const ChatInput = styled.input.attrs({
    type: "text",
    placeholder: "Diz aí..."
})`
    border: none;
    background-color: transparent;
    padding-left: 16px;
`;

export default ChatInput;