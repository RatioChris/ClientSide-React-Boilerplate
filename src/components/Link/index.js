import React, { PropTypes } from 'react'
import styles from './styles.css'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href='#' className={styles.link} onClick={e => {
      e.preventDefault()
      onClick()
    }}>
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
