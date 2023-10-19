import '../css/navbar.scss'
import introduce from '../assets/image/introduceAnimation.svg'

const Navbar = () => {
  const PROJECT = '{ PROJECT }'

  return (
    <div className="navbar-wrapper">
      <ul className="navbar-items">
        <li>&lt;HI&gt;</li>
        <li>{PROJECT}</li>
        <li>( ABOUT )</li>
        <li>[ CONTACT ]</li>
      </ul>

      <div className="introduce">
        <img src={introduce} alt="introduce-image" />
      </div>
    </div>
  )
}
export default Navbar
