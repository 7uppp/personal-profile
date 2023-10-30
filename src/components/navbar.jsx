import '../css/navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import linkedInIcon from '../assets/image/linkedin.svg'
import githubIcon from '../assets/image/github.svg'
import toolbarIcon from '../assets/image/toolbar.svg'

const Navbar = () => {
  const SKILLS = '{ SKILLS }'

  const closeMobileMenu = () => {
    setToolbarClicked(false)
  }

  const [toolbarClicked, setToolbarClicked] = useState(false)
  return (
    <div className="navbar-wrapper">
      <ul className="navbar-items">
        <li>
          <Link to="/">&lt;HI&gt;</Link>
        </li>
        <li>
          <Link to="/skills" onClick={closeMobileMenu}>
            {SKILLS}
          </Link>
        </li>
        <li>
          <Link to="/projects">/&nbsp;PROJECT/</Link>
        </li>
        <li>
          <Link to="/contact">[ CONTACT ]</Link>
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

      <div className="navbar-mobile">
        <img
          className={'toolbar'}
          src={toolbarIcon}
          alt="toolbarIcon"
          onClick={() => setToolbarClicked(!toolbarClicked)}
        />
        {toolbarClicked ? (
          <ul className="navbar-items-mobile">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                &lt;HI&gt;
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={closeMobileMenu}>
                {SKILLS}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMobileMenu}>
                /&nbsp;PROJECT/
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                [ CONTACT ]
              </Link>
            </li>
            <li>
              <img
                src={githubIcon}
                alt="githubIcon"
                onClick={() => {
                  window.open('https://github.com/7uppp')
                  closeMobileMenu()
                }}
              />
            </li>
            <li>
              <img
                src={linkedInIcon}
                alt="linkedInIcon"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/mark-wang7/')
                  closeMobileMenu()
                }}
              />
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
export default Navbar
