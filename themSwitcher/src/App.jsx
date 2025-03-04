
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState("light")

  const darkTheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }

  // change in theme
  
  useEffect(() => {
    document.querySelector("html").classList.remove("darrk", "light")
    document.querySelector("html").classList.remove(theme)
  }, [theme])
  

  return (
<ThemeProvider value={{theme, darkTheme, lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
   <div className="w-full">
       <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
       </div>
       <div className="w-full max-w-sm mx-auto">
          <Card/>
       </div>
     </div>
</div>
</ThemeProvider>
  )
}

export default App
