import './App.css'
import LoadingAnimation from './components/loadingAnimation'
import Hero from './pages/hero'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [showHero, setShowHero] = useState(false)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            showHero ? (
              <Hero />
            ) : (
              <LoadingAnimation onEnterClick={() => setShowHero(true)} />
            )
          }
        />

        {/* 这是你的其他路由 */}
        {/* <Route path="/other-path" element={<OtherComponent />} /> */}
        {/* 在这里添加更多的路由... */}
      </Routes>
    </Router>
  )
}

export default App
