import React from 'react'

import { FormContainer, InputStyled, ButtonSaveStyled } from './styles'

const InputEdit = React.forwardRef((props, ref) => {
    return (
        <FormContainer width={props.width} onSubmit={props.onSubmit}>
            <InputStyled
                placeholder={props.placeholder}
                type="text"
                value={props.value}
                ref={ref}
                onChange={props.onChange}
            />
            <ButtonSaveStyled >save</ButtonSaveStyled>
        </FormContainer>
    )
})

export default InputEdit