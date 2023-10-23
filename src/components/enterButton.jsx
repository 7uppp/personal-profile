import '../css/enterButton.scss'

const EnterButton = ({ onClick }) => {
  return (
    <button className="enter-button-wrapper" onClick={onClick}>
      Jump in !
    </button>
  )
}

export default EnterButton
