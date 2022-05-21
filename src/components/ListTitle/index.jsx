import React from 'react'
import './styles.css'
import { FaBuffer } from "react-icons/fa";
import { BsPencilSquare } from 'react-icons/bs'

const ListTitle = ({ children, onClickHandle }) => {
    return (
        <div className='container_title'>
            <div className='box_text_button'>
                <FaBuffer color={"#1a8a52"} size={28} />
                <h1 className='list_title'>{children}</h1>
                <button className='button_add' onClick={onClickHandle}>
                    <BsPencilSquare color={"#1a8a52"} size={16} />
                </button>
            </div>
        </div>
    )
}

export default ListTitle