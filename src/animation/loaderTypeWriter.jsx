import '../css/loaderTypeWriter.scss'

const LoaderTypeWriter = () => {
  const words = "axios.get('/api/welcome')"
  return (
    <div>
      <div className="typeWriter-axios">
        <h1>{words}</h1>
      </div>

      <div className="typeWriter-response"></div>
    </div>
  )
}

export default LoaderTypeWriter
