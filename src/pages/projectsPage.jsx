import '../css/projectsPage.scss'
import ProjectContainer from '../components/projectContainer'
import { rhImages, tsImages } from '../constants'

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-page-wrapper">
        <div className="rh-project">
          <ProjectContainer images={rhImages} />
        </div>

        <div className="ts-project">
          <ProjectContainer images={tsImages} />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
