import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import { iconsUpper } from './components/sidebar/icons/IconsUpper'
import { IconsDown } from './components/sidebar/icons/IconsDown'

function App() {
  return (
    <div className="App">
      <Sidebar icons={iconsUpper} />
      <Sidebar icons={IconsDown} />
    </div>
  )
}

export default App
