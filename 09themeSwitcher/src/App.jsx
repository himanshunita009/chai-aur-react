import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeBtn from './Conponents/ThemeBtn';
import Card from './Conponents/Card';

function App() {
  const [themeode,setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('dark','light');
    html.classList.add(themeode);
  },[themeode])

  return (
    
      
  <ThemeContextProvider value={{themeode,lightTheme,darkTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card />
        </div>
    </div>
  </div>
  </ThemeContextProvider>

    
  )
}

export default App
