
import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [NumberAllowed, setNUmberAllowed] = useState(false)
  const [CharcterAllowed, setCharcterAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  const PasswordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtstuvwxyz"
    if(NumberAllowed) str += "0123456789"
    if(CharcterAllowed) str += "!@#$%^&*`~[]{}"
    for (let i = 1; i < array.length; i++){
     let char = Math.floor(Math.random()* str.length+1)
     pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length,NumberAllowed,CharterAllowed,setPassword])
  
  return (
    <>
    <h1>i have Password</h1>
    </>
  )
}
export default App
