import React from 'react'
import Long from '../../../img/Market/Long.svg'
import Linked from '../../../img/Market/Linked.svg'
import Arrows from '../../../img/Market/Arrows.svg'
import Trash from '../../../img/Market/Trash.svg'
import MainBlock from './mainBlock/MainBlock'
import { SUMMARY_DATA } from '../MarketData'
import { SUMMARY_INFO_DESCRIPTION } from '../MarketData'
import { CONTACT_DETAILS } from '../MarketData'
import { PHOTOS_DESCRIPTION } from '../MarketData'
import { PHOTOS_DATES } from '../MarketData'
import { useState } from 'react'
import './MarketMain.css'
import Exit from '../../modals/exit/Exit'

function MarketMain() {
  const title = 'К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ'
  const [exit_is_active, setExit_is_active] = useState(false)

  return (
    <div>
      <header className="header">
        <div className="header title">
          <img src={Long} alt="iconArrow" className="header__arrow"></img>
          <div className="header__title">{title}</div>
        </div>
        <div className="header__icons">
          <img src={Linked} alt="Linked" className="header__icon"></img>
          <img src={Arrows} alt="Arrows" className="header__icon" onClick={() => window.location.reload()}></img>
          <img src={Trash} alt="Trash" className="header__icon" onClick={() => setExit_is_active(true)}></img>
        </div>
      </header>
      <div className="header__hr"></div>
      <MainBlock
        SUMMARY_DATA={SUMMARY_DATA}
        SUMMARY_INFO_DESCRIPTION={SUMMARY_INFO_DESCRIPTION}
        CONTACT_DETAILS={CONTACT_DETAILS}
        PHOTOS_DESCRIPTION={PHOTOS_DESCRIPTION}
        PHOTOS_DATES={PHOTOS_DATES}
      />
      <Exit is_active={exit_is_active} setModalIsActive={setExit_is_active} />
    </div>
  )
}

export default MarketMain
