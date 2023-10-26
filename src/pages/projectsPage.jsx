import { useState } from 'react'
import '../css/projectsPage.scss'
import ImageMarquee from '../components/imageMarquee'
import { rhImages } from '../constants'

const ProjectsPage = () => {
  const [modalImage, setModalImage] = useState(null)

  const openModal = (image) => {
    setModalImage(image)
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className="projects-page">
      <div className="projects-page-wrapper">
        <div className="rh-project">
          <ImageMarquee images={rhImages} delay={2000} />
        </div>

        <div className="ts-project">
          <p></p>
        </div>
      </div>

      {modalImage && (
        <div className="modal modal-open" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage
