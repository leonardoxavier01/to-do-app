import React from 'react'
import './styles.css'
import { FaBuffer } from "react-icons/fa";
import { BsPencilSquare } from 'react-icons/bs'

const ListTitle = ({ children, onClickHandle }) => {
    return (
        <div className='container_title'>
            <div className='testx'>
                <FaBuffer color={"#1a8a52"} size={28} />
                <h1 className='list_title'>{children}</h1>
            </div>
            <button className='button_add margin_left' onClick={onClickHandle}> <BsPencilSquare color={"#1a8a52"} size={16} /></button>
        </div>
    )
}

export default ListTitle