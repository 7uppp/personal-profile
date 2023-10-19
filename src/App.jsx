import './App.css'
import HtmlStyleIntroduce from './components/htmlStyleIntroduce'
import Navbar from './components/navbar'
import ReactIntroduce from './components/reactIntroduce'
import SelfIntroduce from './components/selfIntroduce'

function App() {
  return (
    <div className={'app'}>
      <div className="app-wrapper">
        <div className="header-section">
          <Navbar />
          <SelfIntroduce />
        </div>

        <div className="introduce-components">
          <HtmlStyleIntroduce />
          <ReactIntroduce />
        </div>
      </div>
    </div>
  )
}

export default App
