import '../css/skillsPage.scss'
import ShowSkills from '../components/showSkills.jsx'

const SkillsPage = () => {
  return (
    <>
      <div className={'skills-page'}>
        <ShowSkills />
        <p>
          and that is not all! I am passionate about technology and committed to
          continuous learning to stay updated in the industry !
        </p>
      </div>

      <span role="img" aria-label="emoji">
        <span className="spring-letter letter1">a</span>
        <span className="spring-letter letter2">x</span>
        <span className="spring-letter letter3">i</span>
        <span className="spring-letter letter4">o</span>
        <span className="spring-letter letter5">s</span>
      </span>
    </>
  )
}

export default SkillsPage
