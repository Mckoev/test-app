import './App.css'
import Home from './img/Sidebar/Home.svg'
import Exit from './img/Sidebar/Exit.svg'
import Chat from './img/Sidebar/Chat.svg'
import Market from './img/Sidebar/Market.svg'
import Search from './img/Sidebar/Search.svg'
import Settings from './img/Sidebar/Settings.svg'

function App() {
  return (
    <div className="App">
      hi
      <img src={Home}></img>
      <img src={Exit}></img>
      <img src={Chat}></img>
      <img src={Market}></img>
      <img src={Search}></img>
      <img src={Settings}></img>
      <div>Home</div>
    </div>
  )
}

export default App
