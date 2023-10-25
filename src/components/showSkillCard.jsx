import '../css/showSkillsCard.scss'
import SkillCard from './skillCard'
import {
  frontSkillsConstants,
  backEndSkillsConstants,
  cloudSkillsConstants,
  apiSkillsConstants,
  dataBaseSkillsConstants,
  toolsConstants,
} from '../constants'

const ShowSkillsCard = () => {
  return (
    <div className="skills-card-wrapper">
      <div className="front-end">
        <h2>Front-End :</h2>
        <div className="front-end-card">
          {frontSkillsConstants.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>
      <div className="back-end">
        <h2>Back-End :</h2>
        <div className="back-end-card">
          {backEndSkillsConstants.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>
      <div className="cloud-service">
        <h2>Cloud-Service</h2>
        <div className="cloud-service-card">
          {cloudSkillsConstants.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>
      <div className="api-skill">
        <h2>API</h2>
        <div className="api-skill-card">
          {apiSkillsConstants.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>
      <div className="database-skill">
        <h2>Database</h2>
        <div className="database-skill-card">
          {dataBaseSkillsConstants.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>

      <div className="others">
        <h2>Others</h2>
        <div className="others-card">
          {toolsConstants.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </div>

      <hr />
    </div>
  )
}

export default ShowSkillsCard
