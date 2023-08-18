import './App.css'
import Header from './header/header'
import Side from './side/side'
import Body from './body/body'

function App() {
  return (
    <div className='App'>
      <div className="TopScreen">
        <Header/>
      </div>
      <div className="bodyScreen">
        <Side/>
        <Body/>
      </div>
    </div>
  )
}

export default App
