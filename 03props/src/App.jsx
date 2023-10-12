import { useState } from 'react'

import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2> React aur Props</h2>
      <Card heading="This is Heading One" someInfo={{name:"himanshu",age: 24}} />
      <Card someInfo={{name:"krishna",age: 17}} />
    </>
  )
}

export default App
