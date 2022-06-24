import React from 'react'
import photo from '../../../img/Photo/photo.png'
import photo1 from '../../../img/Photo/photo1.png'
import photo2 from '../../../img/Photo/photo2.png'
import Photos from './Photos'

function MainBlock({ SUMMARY_DATA, SUMMARY_INFO_DESCRIPTION, SUMMARY_INFO_podstanovka, CONTACT_DETAILS, CONTACT_DETAILS_podstanovka, PHOTOS_DESCRIPTION, PHOTOS_DATES }) {
  return (
    <main className="main-block">
      <div className="main-block__name">
        <div className="main-block__title">{SUMMARY_DATA.main_title}</div>
        <button className="main-block__btn-edit"></button>
      </div>
      <section className="summary__info">
        <div className="summary__info-name">
          <div className="summaru__info-title">{SUMMARY_DATA.summary_info}</div>
          <button className="main-block__btn-edit"></button>
        </div>
        <div className="summary__info-blocks">
          <div className="summary__info-block-left">
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.FULL_NOTATION}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.CONTRACT}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.FORM}</div>
            <div className="summary__info-text-field">{SUMMARY_INFO_DESCRIPTION.TYPE}</div>
          </div>
          <div className="summary__info-block-right">
            <div className="summary__info-text-field-value">{SUMMARY_INFO_podstanovka.FULL_NOTATION}</div>
            <div className="summary__info-text-field-value">{SUMMARY_INFO_podstanovka.CONTRACT}</div>
            <div className="summary__info-text-field-value">{SUMMARY_INFO_podstanovka.FORM}</div>
            <div className="summary__info-text-field-value">{SUMMARY_INFO_podstanovka.TYPE}</div>
          </div>
        </div>
        <div className="summary__info-hr"></div>
        <div className="summary__info-name">
          <div className="summaru__info-title">{SUMMARY_DATA.contacts}</div>
          <button className="main-block__btn-edit"></button>
        </div>
        <div className="summary__info-blocks">
          <div className="summary__info-block-left">
            <div className="summary__info-text-field">{CONTACT_DETAILS.FULL_NAME}</div>
            <div className="summary__info-text-field">{CONTACT_DETAILS.TELEPHONE}</div>
            <div className="summary__info-text-field">{CONTACT_DETAILS.EMAIL}</div>
          </div>
          <div className="summary__info-block-right">
            <div className="summary__info-text-field-value">{CONTACT_DETAILS_podstanovka.FULL_NAME}</div>
            <div className="summary__info-text-field-value">{CONTACT_DETAILS_podstanovka.TELEPHONE}</div>
            <div className="summary__info-text-field-value">{CONTACT_DETAILS_podstanovka.EMAIL}</div>
          </div>
        </div>
        <div className="summary__info-hr"></div>
        <div className="summary__info-name">
          <div className="summaru__info-title">{SUMMARY_DATA.added_photo}</div>
        </div>
        <div className="summary__info-photo-block">
          <Photos photo={photo} description={PHOTOS_DESCRIPTION.photo} date={PHOTOS_DATES.photo} />
          <Photos photo={photo1} description={PHOTOS_DESCRIPTION.photo1} date={PHOTOS_DATES.photo1} />
          <Photos photo={photo2} description={PHOTOS_DESCRIPTION.photo2} date={PHOTOS_DATES.photo2} />
        </div>
        <button className="summary__info-btn-add"> ДОБАВИТЬ ИЗОБРАЖЕНИЕ</button>
      </section>
      <div className="summary__info-hr"></div>
      <footer>
        © 1992 - 2020 Честный Агент © Все права защищены. <br />8 (495) 150-21-12{' '}
      </footer>
    </main>
  )
}

export default MainBlock
