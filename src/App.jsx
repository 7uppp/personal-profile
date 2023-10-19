import './App.css'
import HtmlStyleIntroduce from './components/htmlStyleIntroduce'
import Navbar from './components/navbar'
import ReactIntroduce from './components/reactIntroduce'

function App() {
  return (
    <div className={'app-wrapper'}>
      <Navbar />
      <div className="introduce-components">
        <HtmlStyleIntroduce />
        <ReactIntroduce />
      </div>
    </div>
  )
}

export default App
