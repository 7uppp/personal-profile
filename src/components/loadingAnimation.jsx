import { useState, useEffect } from 'react'
import ScrollNum from '../animation/ScrollNum'
import LoaderTypeWriter from '../animation/loaderTypeWriter'
import '../css/loadingAnimation.scss'

const LoadingAnimation = () => {
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResponse(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="animation">
      <LoaderTypeWriter />
      {showResponse && (
        <div className="scroll-number-wrapper">
          <div className="typeWriter-response">
            <h1>response.status&nbsp;=</h1>
          </div>
          <div className="scroll-number">
            <ScrollNum num={2} delay={1} size={'large'} />
            <ScrollNum num={0} delay={1} size={'large'} />
            <ScrollNum num={0} delay={1} size={'large'} />
          </div>
        </div>
      )}
    </div>
  )
}

export default LoadingAnimation
