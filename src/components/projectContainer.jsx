import { useState } from 'react'
import '../css/projectContainer.scss'
import ImageSlider from './imageSlider'

const ProjectContainer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
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
        <div className="modal">
          <button className="modal-close-btn" onClick={closeModal}>
            X
          </button>
          <ImageSlider
            className={'modal-image'}
            images={images}
            onImageClick={handleImageClick}
            initialIndex={currentIndex}
          />
        </div>
      )}
    </div>
  )
}

export default ProjectContainer
