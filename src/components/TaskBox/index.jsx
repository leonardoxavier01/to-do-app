import React from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import './styles.css'

const TaskBox = React.forwardRef((props, ref) => {
    return (
        <div className="container_task">
            <div className="text_checkbox">
                <input
                    type="checkbox"
                    onChange={props.doneHandler}
                    ref={ref}
                    checked={props.checked}
                />
                <span>{props.text}</span>
            </div>
            <div className="buttons_task">
                <button className="button_task" onClick={props.editButtonHandler}>
                    <BsPencilSquare color={"#1a8a52"} size={16} />
                </button>
                <button className="button_task" onClick={props.removeHandler}>
                    <MdOutlineDelete color={"#c2473e"} size={18} />
                </button>
            </div>
        </div>
    )
})

export default TaskBox