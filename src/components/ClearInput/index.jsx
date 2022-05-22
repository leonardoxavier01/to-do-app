import React from 'react'
import { InputStyled } from './styles.js'

const ClearInput = React.forwardRef(({ ...props }, ref) =>
    <InputStyled {...props} ref={ref} />
)

export default ClearInput