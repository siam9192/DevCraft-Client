import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// https://demo.templatemonster.com/demo/359663.html?_gl=1*11g0exr*_ga*MTM1MTc5OTgzNi4xNzAwNzQ0MzYw*_ga_FTPYEGT5LY*MTcwMDc0NDM2MC4xLjEuMTcwMDc0NDQxNC42LjAuMA..
// https://dleohr.dreamstechnologies.com/template-3/html/company.html
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
