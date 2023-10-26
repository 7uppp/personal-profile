import { useState } from 'react'
import '../css/imageSlider.scss'

const ImageSlider = ({ images, initialIndex, onImageClick, className }) => {
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
    <div className={className} onClick={(e) => e.stopPropagation()}>
      <button className="left-arrow" onClick={goPrev}>
        &lt;
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
      <button className="right-arrow" onClick={goNext}>
        &gt;
      </button>
    </div>
  )
}
export default ImageSlider
