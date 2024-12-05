import { useState } from 'react'

import "./App.css"
import Lists from "./lists.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header><h1 id="title">To Do List</h1></header>
      <aside><Lists/></aside>
      <article></article>
    </>
  )
}

export default App
