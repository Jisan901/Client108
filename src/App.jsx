import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
