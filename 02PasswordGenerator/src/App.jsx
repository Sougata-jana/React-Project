
import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [NumberAllowed, setNUmberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  //useRef hook//
  const passwardRef = useRef(null)

  const PasswordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtstuvwxyz"
    if(NumberAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*`~[]{}"
    for (let i = 1; i <length; i++){
     let char = Math.floor(Math.random()* str.length+1)
     pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,NumberAllowed,CharAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwardRef.current?.select();
    passwardRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(Password)}, [Password])

  useEffect(() => {PasswordGenerator()}, [length, NumberAllowed,  CharAllowed, PasswordGenerator] )
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 text-sky-600 bg-gray-800 mt-10'>
      <h1 className='text-white text-center mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        ref={passwardRef}
         />
         <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 active:scale-95 transition focus:ring-1 focus:ring-blue-500' >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex gap-x-1 items-center'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label> length:{length}</label>
        </div>
        <div className='felx items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultValue={NumberAllowed}
          id='Numberinput'
          onChange={()=>{setNUmberAllowed((prev) => !prev)}} 
          />
          <label htmlFor="numberinput">Number</label>
        </div>
        <div className='felx items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultValue={CharAllowed}
          id='charinput'
          onChange={()=>{setCharAllowed((prev) => !prev)}} 
          />
          <label htmlFor="charinput">Charcter</label>
        </div>
      </div>
      </div> 
    </>
  )
}
export default App
