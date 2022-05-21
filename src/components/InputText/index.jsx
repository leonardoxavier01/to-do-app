import React from 'react'
import { BiPlus } from "react-icons/bi";
import { FormContainer, InputStyled, ButtonAddStyled } from './styles';

const InputText = React.forwardRef((props, ref) => {
  return (
    <FormContainer onSubmit={props.onSubmit}>
      <InputStyled type="text" placeholder={props.placeholder}
        maxLength="16" ref={ref} />
      <ButtonAddStyled><BiPlus size={17} /></ButtonAddStyled>
    </FormContainer>
  )
})

export default InputText