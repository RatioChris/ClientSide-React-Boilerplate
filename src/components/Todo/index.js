import React, { PropTypes } from 'react'
import styles from './styles.css'

const Todo = ({ onClick, completed, text }) => (
  <li
    className={styles.todo}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
