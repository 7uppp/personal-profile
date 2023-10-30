import '../css/skillCard.scss'

const SkillCard = ({ skillName, Icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-wrapper">
        <img src={Icon} alt="skillIcon" />
        <span>{skillName}</span>
      </div>
    </div>
  )
}

export default SkillCard
