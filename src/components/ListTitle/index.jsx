import React from 'react'
import { FaBuffer } from "react-icons/fa";
import { BsPencilSquare } from 'react-icons/bs'
import { TitleContainer, Content, ButtonEditStyled } from './styles';

const ListTitle = ({ children, onClickHandle }) => {
    return (
        <TitleContainer>
            <Content>
                <FaBuffer color={"#1a8a52"} size={28} />
                <h1>{children}</h1>
                <ButtonEditStyled onClick={onClickHandle}>
                    <BsPencilSquare color={"#1a8a52"} size={16} />
                </ButtonEditStyled>
            </Content>
        </TitleContainer>
    )
}

export default ListTitle