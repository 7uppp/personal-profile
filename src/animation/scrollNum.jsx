import { useState, useEffect } from 'react'
import '../css/scrollNum.scss'

const ScrollNum = ({ num, delay, size }) => {
  const [translateValue, setTranslateValue] = useState(-90) // Start at 9

  const sizeMap = {
    small: '1.25rem',
    medium: '2.25rem',
    large: '3.5rem',
  }

  const scrollBoxStyle = {
    '--width': sizeMap[size] || sizeMap['small'],
  }

  useEffect(() => {
    const translateYValue = num * -10 // Translated value for target number

    const timer = setTimeout(() => {
      setTranslateValue(translateYValue)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [num, delay])

  const renderNumbers = () => {
    return Array.from({ length: 10 }, (_, i) => i).map((n, index) => (
      <li key={index}>{n}</li>
    ))
  }

  return (
    <div className="scroll-box" style={scrollBoxStyle}>
      <ul
        className="scroll-num"
        style={{
          transform: `translateY(${translateValue}%)`,
        }}>
        {renderNumbers()}
      </ul>
    </div>
  )
}

export default ScrollNum
