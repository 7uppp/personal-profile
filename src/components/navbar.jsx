import '../css/navbar.scss'
import { useNavigate, Link } from 'react-router-dom'
import linkedInIcon from '../assets/image/linkedin.svg'
import githubIcon from '../assets/image/github.svg'

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
        <li>
          <Link to='/projects'>/&nbsp;PROJECT/</Link>
        </li>
        <li>
          <Link to='/contact'>[ CONTACT ]</Link>
        </li>
        <li>
          <img
            src={githubIcon}
            alt="githubIcon"
            onClick={() => window.open('https://github.com/7uppp')}
          />
        </li>
        <li>
          <img
            src={linkedInIcon}
            alt="linkedInIcon"
            onClick={() =>
              window.open('https://www.linkedin.com/in/mark-wang7/')
            }
          />
        </li>
      </ul>
    </div>
  )
}
export default Navbar
