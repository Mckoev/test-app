import React from 'react'
import { CONTACT_DETAILS } from '../market/MarketData'
import './Modal.css'

function ContactsModal() {
  return (
    <>
      <div className="summary-info__blocks">
        <div className="summary-info__block-left">
          <div className="summary-info__field">{CONTACT_DETAILS.FULL_NAME}</div>
          <div className="summary-info__field">{CONTACT_DETAILS.TELEPHONE}</div>
          <div className="summary-info__field">{CONTACT_DETAILS.EMAIL}</div>
        </div>
        <div className="summary-info__block-right">
          <input type="text" size="80" className="summary-info__text-field-value"></input>
          <input type="text" size="80" className="summary-info__text-field-value"></input>
          <input type="text" size="80" className="summary-info__text-field-value"></input>
        </div>
      </div>
      <button className="summary-info__btn-change">Отправить</button>
    </>
  )
}

export default ContactsModal
