import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Modal.css'

function TitleModal() {
  const is_active = useSelector((state) => state.TitleModal_is_active)
  const dispatch = useDispatch()
  const setModalActive = () => {
    dispatch({ type: 'TitleModal', TitleModal_is_active: false })
  }

  return (
    <div className={is_active ? 'modal active' : 'modal'} onClick={() => setModalActive()}>
      <div className={is_active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
        <div className="summary-info__blocks">
          <div className="summary-info__block-left">
            <div className="summary-info__field">Новый заголовок</div>
          </div>
          <div className="summary-info__block-right">
            <input type="text" size="80" className="summary-info__text-field-value"></input>
          </div>
        </div>
        <button className="summary-info__btn-change">Отправить</button>
      </div>
    </div>
  )
}

export default TitleModal
