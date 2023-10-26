import { useState } from 'react'
import '../css/imageMarquee.scss'
import ImageSlider from './imageSlider'

const MainComponent = ({ images }) => {
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
        images={images}
        onImageClick={handleImageClick}
        initialIndex={0}
      />

      {isModalOpen && (
        <div className="modal">
          <button className="modal-close-btn" onClick={closeModal}>
            X
          </button>
          <ImageSlider images={images} initialIndex={currentIndex} />
        </div>
      )}
    </div>
  )
}

export default MainComponent
