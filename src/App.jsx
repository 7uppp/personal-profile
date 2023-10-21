import './App.css'
import LoadingAnimation from './components/loadingAnimation'
import Hero from './pages/hero'
import { useState } from 'react'

function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  return (
    <div className="app">
      {isAnimationComplete ? (
        <div className="app-wrapper">
          <Hero />
        </div>
      ) : (
        <LoadingAnimation setIsAnimationComplete={setIsAnimationComplete} />
      )}
    </div>
  )
}

export default App
