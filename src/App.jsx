import './App.css'
import HtmlStyleIntroduce from './components/htmlStyleIntroduce'
import Navbar from './components/navbar'

function App() {
  return (
    <div className={'app-wrapper'}>
      <Navbar />
      <div className="introduce-components">
        <HtmlStyleIntroduce />
      </div>
    </div>
  )
}

export default App
