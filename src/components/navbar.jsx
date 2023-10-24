import '../css/navbar.scss'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const SKILLS = '{ SKILLS }'
  const Navigate = useNavigate()

  const handleSkillsClick = () => {
    Navigate('/skills')
  }
  return (
    <div className="navbar-wrapper">
      <ul className="navbar-items">
        <li>
          <Link to="/">&lt;HI&gt;</Link>
        </li>
        <li onClick={handleSkillsClick}>{SKILLS}</li>
        <li>/&nbsp;PROJECT/</li>
        <li>
          <a href="https://github.com/7uppp">( GITHUB ) </a>
        </li>
        <li>[ CONTACT ]</li>
      </ul>
    </div>
  )
}
export default Navbar
