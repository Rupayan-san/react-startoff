import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const currentRef = useRef(true)
  const passwordRef = useRef(null)

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(10)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, setAllowChar] = useState(false)

  
  const generatePassword = useCallback(() => {
    const numChars = '0123456789'
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-='
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let characters = letters
    if (allowNum) {
      characters += numChars
    }
    if (allowChar) {
      characters += specialChars
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      generatedPassword += characters.charAt(randomIndex)
    }

    setPassword(generatedPassword)
  }, [length, allowNum, allowChar, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    if (currentRef.current) {
      currentRef.current = false
      return
    }
    generatePassword()
  }, [length, allowNum, allowChar])



  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center">Password Generator</h1>
      <div className="text-white text-center mt-4 bg-cyan-900 p-5 rounded-3xl w-200 h-30 mx-auto">

        <input 
        type="text"
        value={password}
        placeholder="Password will appear here"
        ref={passwordRef}
        readOnly
        className="bg-white text-black p-2 w-96 rounded-3xl hover"
        />

        <button className="bg-blue-600 text-white p-2 rounded-3xl ml-4 w-20 hover:bg-blue-700 active:bg-blue-800" onClick={copyPasswordToClipboard}>copy</button>

        <br />

        <input 
          type="range"
          min="1" 
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-30 mt-4" 
          />

        <span className="ml-3 text-yellow-500 text-lg">length:{length}</span>

        <input
        type="checkbox"
          checked={allowNum}
          onChange={(e) => setAllowNum(e.target.checked)}
          className={`h-4 w-4 rounded-full cursor-pointer ml-4`}
        />
        <span className="ml-2 text-lg text-yellow-500">Numbers</span>

        <input
        type="checkbox"
          checked={allowChar}
          onChange={(e) => setAllowChar(e.target.checked)}
          className={`h-4 w-4 rounded-full cursor-pointer ml-4`}
        />
        <span className="ml-2 text-lg text-yellow-500">Characters</span>

      </div>
      
    </>
  )
}

export default App
