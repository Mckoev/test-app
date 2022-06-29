import React from 'react'
import './Modal.css'
import { updateTitle } from '../../api/updateCard'

function TitleModal({ setModalIsActive }) {
  function changeTitle(e) {
    e.preventDefault()
    updateTitle(e)
    e.target.reset()
    setModalIsActive(false)
  }

  return (
    <form onSubmit={(e) => changeTitle(e)}>
      <div className="summary-info__blocks">
        <div className="summary-info__block-left">
          <div className="summary-info__field">Новый заголовок</div>
        </div>
        <div className="summary-info__block-right">
          <input type="text" className="summary-info__text-field-value" placeholder="Краткое название компании"></input>
        </div>
      </div>
      <button className="summary-info__btn-change">Отправить</button>
    </form>
  )
}

export default TitleModal
