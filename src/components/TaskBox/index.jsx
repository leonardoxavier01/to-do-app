import React from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { TaskContainer, TextCheckbox, WrapperButtons } from './styles'

const TaskBox = React.forwardRef((props, ref) => {
    return (
        <TaskContainer >
            <TextCheckbox >
                <input
                    type="checkbox"
                    onChange={props.doneHandler}
                    ref={ref}
                    checked={props.checked}
                />
                <span>{props.text}</span>
            </TextCheckbox>
            <WrapperButtons >
                <button  onClick={props.editButtonHandler}>
                    <BsPencilSquare color={"#1a8a52"} size={16} />
                </button>
                <button  onClick={props.removeHandler}>
                    <MdOutlineDelete color={"#c2473e"} size={18} />
                </button>
            </WrapperButtons>
        </TaskContainer>
    )
})

export default TaskBox