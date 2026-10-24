import { useState } from 'react'


function App() {


  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfKio4YuSza9TnQlPiMlN4JdugZBnLtPoBJH4CGglExa8YrTY00AOrf1K&s=10')] bg-cover bg-center opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">
          Currency Converter
        </h1>
        <div className='bg-gray-500 p-4 rounded-2xl w-100 flex justify-center mt-10 flex-col'>
          <form action="" className='bg-white w-full h-full rounded-xl p-4'>
            <input 
            type="number" 
            placeholder='Enter Amount'
            value = ''
            />
          </form>
          
          <button className='bg-blue-500  h-10 rounded-xl m-5 mx-auto p-2'>Swap</button>


          <form action="" className='bg-white w-full h-full rounded-xl p-4'>
            <input 
            type="number" 
            placeholder='Enter Amount'
            value = ''
            />
          </form>
        </div>
      </div>
    </div>
  )

}

export default App
