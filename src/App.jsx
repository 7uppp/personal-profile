import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingAnimation from './components/loadingAnimation'
import SkillsPage from './pages/skillsPage'
import Hero from './pages/hero'
import Navbar from './components/navbar'
import ProjectsPage from './pages/projectsPage'

const LayoutWithNavbar = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  )
}

function App() {
  const [showHero, setShowHero] = useState(false)

  if (!showHero) {
    return <LoadingAnimation onEnterClick={() => setShowHero(true)} />
  }

  return (
    <Router>
      <LayoutWithNavbar>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </LayoutWithNavbar>
    </Router>
  )
}

export default App
