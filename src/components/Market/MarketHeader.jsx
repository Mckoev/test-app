import React from 'react'
import Long from '../../img/Market/Long.svg'
import Vector from '../../img/Market/Vector.svg'
import Arrows from '../../img/Market/Arrows.svg'
import Trash from '../../img/Market/Trash.svg'

function MarketHeader() {
  const title = 'К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ'
  return (
    <header className="marketHeader">
      <img src={Long} alt="iconArrow"></img>
      <div>{title}</div>
      <img src={Vector} alt="Vector"></img>
      <img src={Arrows} alt="Arrows"></img>
      <img src={Trash} alt="Trash"></img>
    </header>
  )
}

export default MarketHeader
