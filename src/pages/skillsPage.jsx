import '../css/skillsPage.scss'
import ShowSkillCard from '../components/showSkillCard'

const SkillsPage = () => {
  return (
    <div className={'skills-page'}>
      <div className={'skills-page-wrapper'}>
        <h1>Skills</h1>
        <ShowSkillCard />
        <p>
          and that is not all! I am passionate about technology and committed to
          continuous learning to stay updated in the industry !
        </p>
      </div>
    </div>
  )
}

export default SkillsPage
