import React from 'react'
import { BiPlus } from "react-icons/bi";

import './styles.css'

const InputText = React.forwardRef((props, ref) => {
  return (
    <form className='container_input' onSubmit={props.onSubmit}>
      <input type="text" placeholder={props.placeholder}
        maxLength="16" className='input' ref={ref}/>
      <button className='button_add'><BiPlus size={17} /></button>
    </form>
  )
})

export default InputText