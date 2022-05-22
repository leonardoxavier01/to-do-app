import React from 'react'
import { FaBuffer } from 'react-icons/fa'
import { ListNameContainer, Content, ButtonDelStyled } from './styles'

const ListNameBox = (props) => {
  return (
    <ListNameContainer color={props.color} className='list_name'>
      <Content className="box_icon_title">
        <FaBuffer color={"#1a8a52"} />
        <span>{props.title}</span>
      </Content>
      <ButtonDelStyled className="button_delete"
        onClick={props.onClickButton}>x
      </ButtonDelStyled>
    </ListNameContainer>
  )
}

export default ListNameBox