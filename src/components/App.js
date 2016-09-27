import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './App.css'

const App = () => (
  <section className={styles.app}>
    <h1>Todo List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </section>
)

export default App
