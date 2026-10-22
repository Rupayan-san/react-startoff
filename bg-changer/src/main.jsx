import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BgChanger from './App.jsx'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <>
    <BgChanger />
  </>
)
