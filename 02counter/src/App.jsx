
import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 15;
  const [counter,setCounter] = useState(15);
  function addValue(){
    if(counter < 20)
      setCounter(counter+1);
    // setTimeout(() => {
    //   console.log(counter);
    // },1000);
    //it will print the old value because after this is done using callback register & queue
  }

  const removeValue = () => {
    if(counter > 0)
      setCounter(counter-1);
    // console.log(counter);
  }



  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
