import React from 'react'
import Edit from '../../../img/Market/Edit.svg'

function MainBlock() {
  const main_title = 'Перспективные захоронения'

  return (
    <main>
      <div className="main-block__name">
        <div className="main-block__title">{main_title}</div>
        <img src={Edit} alt="edit"></img>
      </div>
      <section className="summary_info"></section>
    </main>
  )
}

export default MainBlock
