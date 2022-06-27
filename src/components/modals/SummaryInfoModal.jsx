import React from 'react'
import { SUMMARY_INFO_DESCRIPTION } from '../market/MarketData'
import { useSelector, useDispatch } from 'react-redux'
import './Modal.css'

function SummaryInfoModal() {
  const is_active = useSelector((state) => state.SummaryInfoModal_is_active)
  const dispatch = useDispatch()
  const setModalActive = () => {
    dispatch({ type: 'SummaryInfoModal', SummaryInfoModal_is_active: false })
  }

  return (
    <div className={is_active ? 'modal active' : 'modal'} onClick={() => setModalActive()}>
      <div className={is_active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
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
      </div>
    </div>
  )
}

export default SummaryInfoModal
