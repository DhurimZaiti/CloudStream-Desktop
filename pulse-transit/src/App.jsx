import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Van Tracking App</h1>
      <Button variant="contained" color="primary">
        Track Van
      </Button>
    </div>
    </>
  )
}

export default App
