import React from 'react'
import './Exit.css'

function Exit() {
  return (
    <div className="exit">
      <div className="exit__cards">
        <div className="exit__remove-card"> Удалить карточку</div>
        <div className="exit__send-card"> Отправить карточку организации в архив?</div>
      </div>

      <div className="exit__buttons">
        <button className="exit__buttons-cancel">ОТМЕНА</button>
        <button className="exit__buttons-remove">УДАЛИТЬ</button>
      </div>
    </div>
  )
}

export default Exit
