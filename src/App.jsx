import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 class="flex items-center justify-center h-screen
     bg-gray-800 text-white text-2xl font-bold">
    Welcome
  </h1>
  )
}

export default App
