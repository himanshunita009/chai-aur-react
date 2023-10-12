
import { useState } from 'react';
import './App.css'

function App() {
  const [bgColour,setBgColour] = useState('black');
  const colours = ['red','green','blue','yellow','orange','black'];
  return (
    <div id='app-main' style={{width: '100vw',height: '100vh',backgroundColor: bgColour}}>
      <h2>Background Colour Changer</h2>
      <div className="button-main" style={{backgroundColor: 'black',padding: '8px'}}>
        {colours.map((colour) => (
           <button 
           key={colour}
           onClick={() => setBgColour(colour)}
           style={{color:'white',backgroundColor: colour}}>
            {colour}
           </button>
        ))}
      </div>
    </div>
  )
}

export default App
