import React from 'react'
import { FaBuffer } from "react-icons/fa";
import { BsPencilSquare } from 'react-icons/bs'
import { TitleContainer, Content, ButtonEditStyled } from './styles';

const ListTitle = ({ children, onClickHandle }) => {
    return (
        <TitleContainer className='container_title'>
            <Content className='box_text_button'>
                <FaBuffer color={"#1a8a52"} size={28} />
                <h1 className='list_title'>{children}</h1>
                <ButtonEditStyled className='button_add' onClick={onClickHandle}>
                    <BsPencilSquare color={"#1a8a52"} size={16} />
                </ButtonEditStyled>
            </Content>
        </TitleContainer>
    )
}

export default ListTitle