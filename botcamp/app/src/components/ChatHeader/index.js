import styled from "styled-components";

const ChatHeader = styled.header`
    background-color: #26265e;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

    ::after {
        content: "";
        position: absolute;
        bottom: -14px;
        left: 0;
        border: 0px solid transparent;
        border-top: 14px solid #26265e;
        border-left-width: 100vw;

    }
`;

export default ChatHeader;