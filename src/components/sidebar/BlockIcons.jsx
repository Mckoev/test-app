import React from 'react'

function BlockIcons({ icons }) {
  const listItems = icons.map((item) => (
    <div className="icon_wrapper" key={item}>
      <img src={item} alt="icon" className="icon_wrapper-img"></img>
    </div>
  ))
  return <div className="block_icons">{listItems}</div>
}

export default BlockIcons
