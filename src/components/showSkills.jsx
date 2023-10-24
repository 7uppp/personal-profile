import '../css/showSkills.scss'

function SkillList({ title, skills }) {
  return (
    <ul className="skills-list">
      <li>{title} :</li>
      <br />
      {skills.map((skill, index) => (
        <li key={index} className="skills">
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  )
}

function ShowSkills() {
  const frontSkills = [
    'HTML5',
    'React',
    'JavaScript',
    'TypeScript',
    'CSS',
    'Sass',
    'TailWind',
    'JQuery',
    'Redux ToolKit',
    'MUI',
    'Responsive Design',
  ]

  const backEndSkills = ['Node.js', 'Express', 'JWT']

  const cloudServices = ['AWS EC2', 'AWS S3', 'AWS Route 53']

  const api = ['RESTful API', 'Axios', 'JSON', 'Postman', 'Swagger']

  const dataBase = ['MySql', 'MongoDB']

  const tools = [
    'Git',
    'GitHub',
    'Bitbucket',
    'Npm',
    'Yarn',
    ' JIRA',
    'Visual Studio Code',
    'WebStorm',
    'ESLint',
  ]

  const methodologies = ['CI/CD', 'Agile', ' Scrum']

  return (
    <div className="skills">
      <div className="skills-wrapper">
        <h1>Skills</h1>
        <SkillList title="Front-End" skills={frontSkills} />
        <SkillList title="Back-End" skills={backEndSkills} />
        <SkillList title="Cloud Services" skills={cloudServices} />
        <SkillList title="API" skills={api} />
        <SkillList title="Database" skills={dataBase} />
        <SkillList title="Tools" skills={tools} />
        <SkillList title="Methodologies" skills={methodologies} />
      </div>
    </div>
  )
}

export default ShowSkills
