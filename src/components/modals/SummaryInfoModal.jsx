import React from 'react'
import { updateSummaryInfo } from '../../api/updateCard'
import { SUMMARY_INFO_DESCRIPTION } from '../market/MarketData'
import './Modal.css'

function SummaryInfoModal({ setSummaryInfoModal_is_active }) {
  function changeSummaryInfo(e) {
    e.preventDefault()
    updateSummaryInfo(e)
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
          <input type="text" size="50" className="summary-info__text-field-value" placeholder='OOO "Название компании"'></input>
          <input type="text" size="50" className="summary-info__text-field-value" placeholder="125 от 01.01.2022"></input>
          <input type="text" size="50" className="summary-info__text-field-value" placeholder="ООО"></input>
          <select>
            <option value="agent">Агент</option>
            <option value="contractor">Подрядчик</option>
            <option value="agent contractor">Агент Подрядчик</option>
          </select>
        </div>
      </div>
      <button className="summary-info__btn-change">Отправить</button>
    </form>
  )
}

export default SummaryInfoModal
