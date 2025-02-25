
import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [NumberAllowed, setNUmberAllowed] = useState(false)
  const [CharAllowed, setCharcterAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  const PasswordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtstuvwxyz"
    if(NumberAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*`~[]{}"
    for (let i = 1; i < array.length; i++){
     let char = Math.floor(Math.random()* str.length+1)
     pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length,NumberAllowed,CharAllowed,setPassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text'></div>
    </>
  )
}
export default App
