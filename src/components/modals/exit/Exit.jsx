import React from 'react'
import { deleteCompany } from '../../../api/deleteCard'
import './Exit.css'

function Exit({ is_active, setModalIsActive }) {
  function changeExit(e) {
    e.preventDefault()
    setModalIsActive(false)
  }

  return (
    <form onSubmit={(e) => changeExit(e)}>
      <div className={is_active ? 'window act' : 'window'} onClick={() => setModalIsActive(false)}>
        <div className={is_active ? 'window__content act' : 'window__content'} onClick={(e) => e.stopPropagation()}>
          <div className="exit">
            <div className="exit__cards">
              <div className="exit__remove-card"> Удалить карточку</div>
              <div className="exit__send-card"> Отправить карточку организации в архив?</div>
            </div>

            <div className="exit__buttons">
              <button className="exit__buttons-cancel">ОТМЕНА</button>
              <button className="exit__buttons-remove" onClick={() => deleteCompany()}>
                УДАЛИТЬ
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Exit
