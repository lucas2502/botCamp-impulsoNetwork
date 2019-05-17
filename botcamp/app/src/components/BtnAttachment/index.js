import styled from "styled-components";

import IconAttachment from "../../img/iconfinder_attachment.png";

const BtnAttachment = styled.img.attrs({
    src: IconAttachment,
    alt: "Incone Anexar"
})`
    width: 28px;
    padding: 5px 7px;
    bottom: 0%;
    display: flex;
`;

export default BtnAttachment;