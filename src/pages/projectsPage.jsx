import '../css/projectsPage.scss'
import ProjectContainer from '../components/projectContainer'
import { rhImages, tsImages } from '../constants'

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-page-wrapper">
        <span className="slogan">Keep coding, keep learning</span>
        <hr />
        <div className="rh-project">
          <ProjectContainer images={rhImages} />
          <p className="rh-information">
            RollingHub is a start-up Web3 application positioned as an NFT
            liquidity protocol. The project utilized React for frontend, Java
            for backend, MySQL as the database, and was hosted on AWS. The
            platform allows sellers to craft unique loot boxes filled with
            high-value NFTs, which are marketed via lottery tickets. This
            innovative model gives users the chance to acquire premium NFTs at a
            fraction of the cost while enabling sellers to efficiently monetize
            their assets at their targeted price point.
          </p>
        </div>
        <hr />
        <div className="ts-project">
          <ProjectContainer images={tsImages} />
          <p className="ts-information">
            TechScrum is a project management system, whose core users are
            small-medium size businesses. The system allows users to manage
            projects from professional practices, and track and understand the
            real situation of users’ projects in a short time to prevent project
            delay. Meanwhile, the system provides an analysis system that allows
            users to analyze their past projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
