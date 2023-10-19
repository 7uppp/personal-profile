import '../css/navbar.scss'

const Navbar = () => {
  const SKILLS = '{ SKILLS }'

  return (
    <div className="navbar-wrapper">
      <ul className="navbar-items">
        <li>&lt;HI&gt;</li>
        <li>{SKILLS}</li>
        <li>/&nbsp;PROJECT/</li>
        <li>( ABOUT )</li>
        <li>[ CONTACT ]</li>
      </ul>
    </div>
  )
}
export default Navbar
