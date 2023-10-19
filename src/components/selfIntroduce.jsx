import '../css/selfIntroduce.scss'
import introduce from '../assets/image/introduceAnimation.svg'
import typing from '../assets/image/typing.gif'

const SelfIntroduce = () => {
  return (
    <div className="introduce">
      <img src={introduce} alt="introduce-image" />
      <div className="name">
        <span>This is </span>
        <span>Mark</span>
      </div>
      <div className="title">
        <span>A Full-Stack Developer</span>
        <img src={typing} alt="typingImage" />
      </div>
    </div>
  )
}

export default SelfIntroduce
