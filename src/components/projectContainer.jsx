import { useState } from 'react'
import '../css/projectContainer.scss'
import ImageSlider from './imageSlider'

const ProjectContainer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [closeModalClicked, setCloseModalClicked] = useState(false)

  const handleImageClick = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setCloseModalClicked(true)
    setTimeout(() => {
      setIsModalOpen(false)
      setCloseModalClicked(false)
    }, 500)
  }

  return (
    <div className="container">
      <ImageSlider
        className={'main-image'}
        images={images}
        onImageClick={handleImageClick}
        initialIndex={0}
      />

      {isModalOpen && (
        <div className={`modal ${closeModalClicked ? 'closing' : ''}`}>
          <div className="modal-image">
            <button className="modal-close-btn" onClick={closeModal}>
              X
            </button>
            <ImageSlider
              images={images}
              onImageClick={handleImageClick}
              initialIndex={currentIndex}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectContainer
