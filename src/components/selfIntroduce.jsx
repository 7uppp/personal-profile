import '../css/selfIntroduce.scss'
import introduce from '../assets/image/introduceAnimation.svg'
// import typing from '../assets/image/typing.gif'

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
        {/* <img src={typing} alt="typingImage" /> */}
      </div>

      <div className="learner">
        <span>A Constant Eager Learner</span>
        <p className="learner-subtitle">always curious, forever learning.</p>
      </div>

      <div className="life">
        <span>A Life Passionate Individual</span>
        <p className="life-subtitle">
          always on the lookout for the next opportunity to expand my horizons.
        </p>
      </div>

      <div className="introduce-and">AND</div>
      <div className="introduce-person">A REAL PERSON</div>
    </div>
  )
}

export default SelfIntroduce
