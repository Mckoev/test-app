import React from 'react'
import './Sidebar.css'

function Sidebar({ icons }) {
  const listItems = icons.map((item) => (
    <div className="icon_wrapper" key={item}>
      <img src={item} className="wrapper"></img>
    </div>
  ))

  return <div className="sidebar">{listItems}</div>
}

export default Sidebar
