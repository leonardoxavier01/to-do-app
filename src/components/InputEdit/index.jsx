import React from 'react'
import { FormContainer, ButtonSaveStyled } from './styles'
import ClearInput from '../ClearInput'

const InputEdit = React.forwardRef((props, ref) => {
    return (
        <FormContainer width={props.width} onSubmit={props.onSubmit}>
            <ClearInput
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