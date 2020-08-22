import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, index }) {
    return (
        <li>
            <span>
                <input type="checkbox" className="apple-switch" />
                {/* <strong>{ index + 1 }</strong> */}
            </span>

            { todo.title }
            
            <button className="btn-remove">Delete</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem
