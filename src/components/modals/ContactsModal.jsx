import React from 'react'
import { CONTACT_DETAILS } from '../market/MarketData'
import { useSelector, useDispatch } from 'react-redux'
import './Modal.css'

function ContactsModal() {
  const is_active = useSelector((state) => state.ContactsModal_is_active)
  const dispatch = useDispatch()
  const setModalActive = () => {
    dispatch({ type: 'ContactsModal', ContactsModal_is_active: false })
  }

  return (
    <div className={is_active ? 'modal active' : 'modal'} onClick={() => setModalActive()}>
      <div className={is_active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
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
      </div>
    </div>
  )
}

export default ContactsModal
