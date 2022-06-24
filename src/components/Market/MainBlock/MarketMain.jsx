import React from 'react'
import Long from '../../../img/Market/Long.svg'
import Linked from '../../../img/Market/Linked.svg'
import Arrows from '../../../img/Market/Arrows.svg'
import Trash from '../../../img/Market/Trash.svg'
import MainBlock from './MainBlock'
import { SUMMARY_DATA } from './MarketData'
import { SUMMARY_INFO_DESCRIPTION } from './MarketData'
import { SUMMARY_INFO_podstanovka } from './MarketData'
import { CONTACT_DETAILS } from './MarketData'
import { CONTACT_DETAILS_podstanovka } from './MarketData'
import { PHOTOS_DESCRIPTION } from './MarketData'
import { PHOTOS_DATES } from './MarketData'

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
      <MainBlock
        SUMMARY_DATA={SUMMARY_DATA}
        SUMMARY_INFO_DESCRIPTION={SUMMARY_INFO_DESCRIPTION}
        SUMMARY_INFO_podstanovka={SUMMARY_INFO_podstanovka}
        CONTACT_DETAILS={CONTACT_DETAILS}
        CONTACT_DETAILS_podstanovka={CONTACT_DETAILS_podstanovka}
        PHOTOS_DESCRIPTION={PHOTOS_DESCRIPTION}
        PHOTOS_DATES={PHOTOS_DATES}
      />
    </div>
  )
}

export default MarketMain
