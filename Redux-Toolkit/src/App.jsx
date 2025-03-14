import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import RemoveTodo from './components/RemoveTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>i have all student</h1>
    <AddTodo/>
    <RemoveTodo/>
    </>
  )
}

export default App
