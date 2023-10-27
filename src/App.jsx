import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingAnimation from './components/loadingAnimation'
import SkillsPage from './pages/skillsPage'
import Hero from './pages/hero'
import Navbar from './components/navbar'
import ProjectsPage from './pages/projectsPage'
import ContactPage from './pages/contactPage'

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
    <Router basename={import.meta.env.DEV ? '/personal-profile' : '/personal-profile/'}>
      <LayoutWithNavbar>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </LayoutWithNavbar>
    </Router>
  )
}

export default App
