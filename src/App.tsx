import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button.tsx";

function App() {
  const [count, setCount] = useState(0)
  const countMore = (() => {
    setCount((count) => count + 1);
  })

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
    </>
  )
}

export default App