import { useState } from 'react'
import '../css/imageSlider.scss'

const ImageSlider = ({ images, initialIndex, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goPrev = (e) => {
    e.stopPropagation()
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <div className="box" onClick={(e) => e.stopPropagation()}>
      <button className="arrow left-arrow" onClick={goPrev}>
        ←
      </button>
      <div
        className="swiper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="swiper-item"
            onClick={onImageClick ? () => onImageClick(index) : undefined}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={goNext}>
        →
      </button>
    </div>
  )
}
export default ImageSlider
