import React from 'react'
import { updateSummaryInfo } from '../../api/patch_title'
import { SUMMARY_INFO_DESCRIPTION } from '../market/MarketData'
import './Modal.css'

function SummaryInfoModal({ setSummaryInfoModal_is_active }) {
  function changeSummaryInfo(e) {
    e.preventDefault()
    updateSummaryInfo(e.target[0].value, e.target[1].value.split(' '), e.target[2].value, e.target[3].value.split(' '))
    e.target.reset()
    setSummaryInfoModal_is_active(false)
  }

  return (
    <form onSubmit={(e) => changeSummaryInfo(e)}>
      <div className="summary-info__blocks">
        <div className="summary-info__block-left">
          <div className="summary-info__field">{SUMMARY_INFO_DESCRIPTION.FULL_NOTATION}</div>
          <div className="summary-info__field">{SUMMARY_INFO_DESCRIPTION.CONTRACT}</div>
          <div className="summary-info__field">{SUMMARY_INFO_DESCRIPTION.FORM}</div>
          <div className="summary-info__field">{SUMMARY_INFO_DESCRIPTION.TYPE}</div>
        </div>
        <div className="summary-info__block-right">
          <input type="text" size="80" className="summary-info__text-field-value"></input>
          <input type="text" size="80" className="summary-info__text-field-value"></input>
          <input type="text" size="80" className="summary-info__text-field-value"></input>
          <input type="text" size="80" className="summary-info__text-field-value"></input>
        </div>
      </div>
      <button className="summary-info__btn-change">Отправить</button>
    </form>
  )
}

export default SummaryInfoModal
