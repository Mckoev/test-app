import React from 'react'
import Edit from '../../../img/Market/Edit.svg'
import photo from '../../../img/Photo/photo.png'
import photo1 from '../../../img/Photo/photo1.png'
import photo2 from '../../../img/Photo/photo2.png'
import ButtonClose from './ButtonClose'

function MainBlock() {
  const main_title = 'Перспективные захоронения'
  const summary_info = 'ОБЩАЯ ИНФОРМАЦИЯ'
  const contacts = 'КОНТАКТНЫЕ ДАННЫЕ'
  const added_photo = 'ПРИЛОЖЕННЫЕ ФОТО'

  const SUMMARY_INFO_DESCRIPTION = {
    FULL_NOTATION: 'Полное название',
    CONTRACT: 'Договор',
    FORM: 'Форма',
    TYPE: 'Тип',
  }

  const SUMMARY_INFO_podstanovka = {
    FULL_NOTATION: 'ООО Фирма “Перспективные захоронения”',
    CONTRACT: '12345 от 12.03.2015',
    FORM: 'ООО',
    TYPE: 'Агент, Подрядчик',
  }

  const CONTACT_DETAILS = {
    FULL_NAME: 'ФИО',
    TELEPHONE: 'Телефон',
    EMAIL: 'Эл. почта',
  }

  const CONTACT_DETAILS_podstanovka = {
    FULL_NAME: 'Григорьев Сергей Петрович',
    TELEPHONE: '+7 (916) 216-55-88',
    EMAIL: 'grigoriev@funeral.com',
  }

  return (
    <main className="main-block">
      <div className="main-block__name">
        <div className="main-block__title">{main_title}</div>
        <img src={Edit} alt="edit"></img>
      </div>
      <section className="summary__info">
        <div className="summary__info-name">
          <div className="summaru__info-title">{summary_info}</div>
          <img src={Edit} alt="edit"></img>
        </div>
        <div className="summary__info-blocks">
          <div className="summary__info-block-left">
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.FULL_NOTATION}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.CONTRACT}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.FORM}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.TYPE}</div>
          </div>
          <div className="summary__info-block-right">
            <div className="summary__info-text-field">{SUMMARY_INFO_podstanovka.FULL_NOTATION}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_podstanovka.CONTRACT}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_podstanovka.FORM}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_podstanovka.TYPE}</div>
          </div>
        </div>
        <div className="summary__info-hr"></div>
        <div className="summary__info-name">
          <div className="summaru__info-title">{contacts}</div>
          <img src={Edit} alt="edit"></img>
        </div>
        <div className="summary__info-blocks">
          <div className="summary__info-block-left">
            <div className="summary__info-text-field">{CONTACT_DETAILS.FULL_NAME}</div>
            <div className="summary__info-text-field">{CONTACT_DETAILS.TELEPHONE}</div>
            <div className="summary__info-text-field">{CONTACT_DETAILS.EMAIL}</div>
          </div>
          <div className="summary__info-block-right">
            <div className="summary__info-text-field">{CONTACT_DETAILS_podstanovka.FULL_NAME}</div>
            <div className="summary__info-text-field">{CONTACT_DETAILS_podstanovka.TELEPHONE}</div>
            <div className="summary__info-text-field">{CONTACT_DETAILS_podstanovka.EMAIL}</div>
          </div>
        </div>
        <div className="summary__info-hr"></div>
        <div className="summary__info-name">
          <div className="summaru__info-title">{added_photo}</div>
        </div>
        <div className="summary__info-photo-block">
          <figure>
            <img src={photo} alt="stoun" className="summary__info-photo" />
            <ButtonClose />
            <figcaption className="summary__info-photo-subscription">Надгробный камень.jpg</figcaption>
            <figcaption className="summary__info-photo-date">11 июня 2018</figcaption>
          </figure>
          <figure>
            <img src={photo1} alt="photo1" className="summary__info-photo" />
            <ButtonClose />
            <figcaption className="summary__info-photo-subscription">Общий вид.jpg</figcaption>
            <figcaption className="summary__info-photo-date">11 июня 2018</figcaption>
          </figure>
          <figure>
            <img src={photo2} alt="photo2" className="summary__info-photo" />
            <ButtonClose />
            <figcaption className="summary__info-photo-subscription">Пример ограды.jpg</figcaption>
            <figcaption className="summary__info-photo-date">11 июня 2018</figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}

export default MainBlock
