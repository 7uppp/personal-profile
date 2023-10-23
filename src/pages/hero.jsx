import '../css/hero.scss'
import HtmlStyleIntroduce from '../components/htmlStyleIntroduce'
import ReactIntroduce from '../components/reactIntroduce'
import SelfIntroduce from '../components/selfIntroduce'
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="header-section">
        <SelfIntroduce />
      </div>
      <div className="introduce-components">
        <HtmlStyleIntroduce />
        <ReactIntroduce />
      </div>
    </div>
  )
}

export default Hero
