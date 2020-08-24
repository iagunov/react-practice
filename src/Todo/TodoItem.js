import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li>
            <span>
                <input
                 type="checkbox" 
                 checked={todo.completed}
                 //checkbox state
                 className="apple-switch"
                //  toggle
                 onChange={() => onChange(todo.id)} 
                 />
                {/* <strong>{ index + 1 }</strong> */}
            </span>

            <span className={classes.join('  ')}>
            { todo.title }
            </span>
            
            <button className="btn-remove" onClick={ removeTodo.bind(null, todo.id) } >Delete</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
