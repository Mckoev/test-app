import React from 'react'

function BlockIcons({ icons }) {
  const listItems = icons.map((item) => (
    <div className="sidebar__icon" key={item}>
      <img src={item} alt="icon"></img>
    </div>
  ))
  return <div className="sidebar__icons">{listItems}</div>
}

export default BlockIcons
