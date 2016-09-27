import React from 'react'
import FilterLink from '../../containers/FilterLink'
import styles from './styles.css'

const Footer = () => (
  <p className={styles.footer}>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
)

export default Footer
