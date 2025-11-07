import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center h-44'>
        <a className='font-medium text-[#646cff] decoration-inherit hover:text-[#747bff] dark:hover:text-[#535bf2]' href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-48 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] will-change-[filter] transition-[filter] duration-300" alt="Vite logo" />
        </a>
        <a className='font-medium text-[#646cff] decoration-inherit hover:text-[#747bff] dark:hover:text-[#535bf2] animate-[logo-spin_20s_linear_infinite]' href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-48 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] will-change-[filter] transition-[filter] duration-300 react" alt="React logo" />
        </a>
        <a className='font-medium text-[#646cff] decoration-inherit hover:text-[#747bff] dark:hover:text-[#535bf2]' href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="h-48 p-6 hover:drop-shadow-[0_0_2em_#326cffaa] will-change-[filter] transition-[filter] duration-300" alt="Tailwind CSS logo" />
        </a>
      </div>
      <h1 className='text-6xl/tight'>Vite + React + Tailwind</h1>
      <div className="p-8">
        <button className='rounded-lg border border-transparent py-2.5 px-5 text-base font-medium bg-[#f9f9f9] dark:bg-[#1a1a1a] cursor-pointer transition-colors duration-300 hover:border-[#646cff] focus:outline-2' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite, React and Tailwind logos to learn more
      </p>
    </>
  )
}

export default App
