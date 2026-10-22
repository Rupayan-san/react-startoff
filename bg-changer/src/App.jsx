import { useState } from 'react'


function BgChanger() {
  const [color, setColor] = useState('olive')
  

  return (
    <div className="h-screen w-full duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/30 backdrop-blur-md rounded-lg p-3">
          <button
            className="bg-red-500 w-10 h-10 rounded-full shadow-lg hover:scale-110 duration-200"
            onClick={() => setColor('red')}
          ></button>
          <button
            className="bg-blue-500 w-10 h-10 rounded-full shadow-lg hover:scale-110 duration-200"
            onClick={() => setColor('blue')}
          ></button>
          <button
            className="bg-green-500 w-10 h-10 rounded-full shadow-lg hover:scale-110 duration-200"
            onClick={() => setColor('green')}
          ></button>
          <button
            className="bg-yellow-500 w-10 h-10 rounded-full shadow-lg hover:scale-110 duration-200"
            onClick={() => setColor('yellow')}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger
