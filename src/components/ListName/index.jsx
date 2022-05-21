import React from 'react'
import './styles.css'
import { FaBuffer } from 'react-icons/fa'

const ListName = ({title, onClick}) => {
  return (
    <div className='list_name'>
      <div className="box_icon_title">
        <FaBuffer color={"#1a8a52"} />
        <span>{title}</span>
      </div>
      <button className="button_delete"
        onClick={onClick}>x</button>
    </div>
  )
}

export default ListName