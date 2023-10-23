import '../css/navbar.scss'

const Navbar = () => {
  const SKILLS = '{ SKILLS }'

  return (
    <div className="navbar-wrapper">
      <ul className="navbar-items">
        <li>
          <a href="/">&lt;HI&gt;</a>
        </li>
        <li>{SKILLS}</li>
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
