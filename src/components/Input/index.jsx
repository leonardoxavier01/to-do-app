import React from 'react'
import { BiPlus } from "react-icons/bi";

import './styles.css'

const Input = ({ref}) => {
  return (
    <div className='container_input'>
      <input type="text" placeholder='New List' className='input'/>
      <button className='button_add'><BiPlus size={17} /></button>
    </div>
  )
}

export default Input