
import { memo, useMemo, useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';




function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    // console.log('hi');
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-=,.<>?[]{}|;:~";

    for(let i =0;i<length;++i){
      let char = Math.floor(Math.random()*str.length+1)
      // pass = str.charAt(char);
      pass += str.charAt(char);
    }

    setPassword(pass);
    //Here in dependecies we have passed setPassword not the password because if we pass password then it will be called 
    //for an infinitely amount of time
    //
  },[length,numberAllowed,charAllowed]);
  // passwordGenerator();
  //Since it is updating password which will reflect in UI & will cause infinitely re render again & again that is why we can't call it simply
  const copyPasswordToClipBoard = useCallback(()=> {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  },[password]);
  
  useEffect(() => {
    passwordGenerator();
  },[length,charAllowed,numberAllowed,passwordGenerator]);


  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox"  
                defaultChecked={false}
                value={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
                />
              <label htmlFor='numberInput'>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox"  
                defaultChecked={false}
                value={charAllowed}
                id="charInput"
                onChange={() => setCharAllowed((prev) => !prev)}
                />
              <label htmlFor='charInput'>Character</label>
          </div>
          
        </div>
      </div>
      
  )
}

export default App

