import React from 'react'
import './Modal.css'

function Modal({ is_active, setModalIsActive, children }) {
  return (
    <div className={is_active ? 'modal active' : 'modal'} onClick={() => setModalIsActive(false)}>
      <div className={is_active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
