import styled from "styled-components";

const onKeyDown = ({ event, currentTarget}, addMessage) => {
    if( event ==+ 13){
        addMessage(currentTarget.value)
        currentTarget.value = ''
    }
}

const ChatInput = styled.input.attrs(({ addMessage }) => ({
    type: 'text',
    placeholder: 'Diz aí...',
    onKeyDown: event => onKeyDown(event, addMessage)
}))`
    box-sizing: border-box;
    border: none;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.33);
    width: 100vw;
    height: 50px;
    background-color: #fbfbff;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    padding: 14px 11px 14px 16px;

    ::after{
        
    }
`;

export default ChatInput;