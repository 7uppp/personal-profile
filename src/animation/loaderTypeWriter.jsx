import '../css/loaderTypeWriter.scss'

const LoaderTypeWriter = () => {
  const placeHolder = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'
  const words = `axios.get('/api/${placeHolder} ')`
  return (
    <div>
      <div className="typeWriter-axios">
        <h1>{words}</h1>
        <div className="spring-letter">
          <span className="letter1">W</span>
          <span className="letter2">e</span>
          <span className="letter3">l</span>
          <span className="letter4">c</span>
          <span className="letter5">o</span>
          <span className="letter6">m</span>
          <span className="letter7">e</span>
        </div>
      </div>
    </div>
  )
}

export default LoaderTypeWriter
