import React from 'react'
import { FaBuffer } from 'react-icons/fa'
import { ListNameContainer, Content, ButtonDelStyled } from './styles'

const ListNameBox = ({ title, onClick }) => {
  return (
    <ListNameContainer className='list_name'>
      <Content className="box_icon_title">
        <FaBuffer color={"#1a8a52"} />
        <span>{title}</span>
      </Content>
      <ButtonDelStyled className="button_delete"
        onClick={onClick}>x
      </ButtonDelStyled>
    </ListNameContainer>
  )
}

export default ListNameBox