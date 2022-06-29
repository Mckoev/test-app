import React from 'react'
import { updateContacts } from '../../api/updateCard'
import { CONTACT_DETAILS } from '../market/MarketData'
import './Modal.css'

function ContactsModal({ setContactsModal_is_active }) {
  function changeContacts(e) {
    e.preventDefault()
    updateContacts(e)
    e.target.reset()
    setContactsModal_is_active(false)
  }
  return (
    <form onSubmit={(e) => changeContacts(e)}>
      <div className="summary-info__blocks">
        <div className="summary-info__block-left">
          <div className="summary-info__field">{CONTACT_DETAILS.FULL_NAME}</div>
          <div className="summary-info__field">{CONTACT_DETAILS.TELEPHONE}</div>
          <div className="summary-info__field">{CONTACT_DETAILS.EMAIL}</div>
        </div>
        <div className="summary-info__block-right">
          <input type="text" size="50" className="summary-info__text-field-value" placeholder="Иванов Иван Иванович"></input>
          <input type="telephone" size="50" className="summary-info__text-field-value" placeholder="79001234567"></input>
          <input type="email" size="50" className="summary-info__text-field-value" placeholder="email@mail.ru"></input>
        </div>
      </div>
      <button className="summary-info__btn-change">Отправить</button>
    </form>
  )
}

export default ContactsModal
