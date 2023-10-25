import '../css/skillCard.scss'

const SkillCard = ({ skillName, Icon }) => {
  return (
    <div className="skill-card">
      <img src={Icon} alt="skillIcon" />
      <span>{skillName}</span>
    </div>
  )
}

export default SkillCard
