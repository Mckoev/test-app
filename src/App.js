import './App.css'
import Exit from './components/exit/Exit'
import Market from './components/market/Market'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="app__block">
        <div className="app_block-in">
          <Sidebar />
          <Market />
        </div>
        <Exit />
      </div>
    </div>
  )
}

export default App
