import React from 'react'
import './styles.css'

const InputEdit = React.forwardRef((props, ref) => {
    return (
        <form className="container_form_edit" onSubmit={props.onSubmit}>
            <input
                className="input"
                placeholder="Edit Task"
                type="text"
                value={props.text}
                ref={ref}
                onChange={props.onChange}
            />
            <button className="button_save">save</button>
        </form>
    )
})

export default InputEdit