import React from 'react'
import Long from '../../../img/Market/Long.svg'
import Linked from '../../../img/Market/Linked.svg'
import Arrows from '../../../img/Market/Arrows.svg'
import Trash from '../../../img/Market/Trash.svg'
import MainBlock from './MainBlock'

function MarketMain() {
  const title = 'К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ'
  return (
    <div>
      <header className="marketHeader__wrapper">
        <div className="marketHeader__wrapper-title">
          <img src={Long} alt="iconArrow" className="marketHeader__arrow"></img>
          <div className="marketHeader__title">{title}</div>
        </div>
        <div className="marketHeader__icons">
          <img src={Linked} alt="Linked"></img>
          <img src={Arrows} alt="Arrows"></img>
          <img src={Trash} alt="Trash"></img>
        </div>
      </header>
      <div className="marketHeader__hr"></div>
      <MainBlock />
    </div>
  )
}

export default MarketMain
