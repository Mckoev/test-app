import React, { useEffect } from 'react'
import photo from '../../../../img/Photo/photo.png'
import photo1 from '../../../../img/Photo/photo1.png'
import photo2 from '../../../../img/Photo/photo2.png'
import AttachedPhotos from '../attachedPhotos/AttachedPhotos'
import './MainBlock.css'
import { useDispatch, useSelector } from 'react-redux'
import SummaryInfoModal from '../../../modals/SummaryInfoModal'
import TitleModal from '../../../modals/TitleModal'
import ContactsModal from '../../../modals/ContactsModal'
import { getCompany, getContacts } from '../../../../api/get_request.js'

function MainBlock({ SUMMARY_DATA, SUMMARY_INFO_DESCRIPTION, CONTACT_DETAILS, PHOTOS_DESCRIPTION, PHOTOS_DATES }) {
  useEffect(() => {
    getCompany()
    getContacts()
  })

  const dispatch = useDispatch()
  const shortName = useSelector((state) => state.SHORT_NAME)
  const full = useSelector((state) => state.FULL_NOTATION)
  const contract = useSelector((state) => state.CONTRACT)
  const form = useSelector((state) => state.FORM)
  const type = useSelector((state) => state.TYPE)
  const name = useSelector((state) => state.FULL_NAME)
  const telephone = useSelector((state) => state.TELEPHONE)
  const email = useSelector((state) => state.EMAIL)

  const setSummaryModelActive = () => {
    dispatch({ type: 'SummaryInfoModal', SummaryInfoModal_is_active: true })
  }

  const setTitleModelActive = () => {
    dispatch({ type: 'TitleModal', TitleModal_is_active: true })
  }

  const setContactsModelActive = () => {
    dispatch({ type: 'ContactsModal', ContactsModal_is_active: true })
  }

  return (
    <main className="main">
      <div className="main__name">
        <div className="main__title">{shortName}</div>
        <button className="main__btn-edit" onClick={() => setTitleModelActive()}></button>
      </div>
      <section className="summary-info">
        <div className="summary-info__name">
          <div className="summaru-info__title">{SUMMARY_DATA.summary_info}</div>
          <button className="main__btn-edit" onClick={() => setSummaryModelActive()}></button>
        </div>
        <div className="summary-info__blocks">
          <div className="summary-info__block-left">
            <div className="summary-info__text-field">{SUMMARY_INFO_DESCRIPTION.FULL_NOTATION}</div>
            <div className="summary-info__text-field">{SUMMARY_INFO_DESCRIPTION.CONTRACT}</div>
            <div className="summary-info__text-field">{SUMMARY_INFO_DESCRIPTION.FORM}</div>
            <div className="summary-info__text-field">{SUMMARY_INFO_DESCRIPTION.TYPE}</div>
          </div>
          <div className="summary-info__block-right">
            <div className="summary-info__text-field-value">{full}</div>
            <div className="summary-info__text-field-value">{contract}</div>
            <div className="summary-info__text-field-value">{form}</div>
            <div className="summary-info__text-field-value">{type}</div>
          </div>
        </div>
        <div className="summary-info__hr"></div>
        <div className="summary-info__name">
          <div className="summaru-info__title">{SUMMARY_DATA.contacts}</div>
          <button className="main__btn-edit" onClick={() => setContactsModelActive()}></button>
        </div>
        <div className="summary-info__blocks">
          <div className="summary-info__block-left">
            <div className="summary-info__text-field">{CONTACT_DETAILS.FULL_NAME}</div>
            <div className="summary-info__text-field">{CONTACT_DETAILS.TELEPHONE}</div>
            <div className="summary-info__text-field">{CONTACT_DETAILS.EMAIL}</div>
          </div>
          <div className="summary-info__block-right">
            <div className="summary-info__text-field-value">{name}</div>
            <div className="summary-info__text-field-value">{telephone}</div>
            <div className="summary-info__text-field-value">{email}</div>
          </div>
        </div>
        <div className="summary-info__hr"></div>
        <div className="summary-info__name">
          <div className="summaru-info__title">{SUMMARY_DATA.added_photo}</div>
        </div>
        <div className="summary-info__photo-block">
          <AttachedPhotos photo={photo} description={PHOTOS_DESCRIPTION.photo} date={PHOTOS_DATES.photo} />
          <AttachedPhotos photo={photo1} description={PHOTOS_DESCRIPTION.photo1} date={PHOTOS_DATES.photo1} />
          <AttachedPhotos photo={photo2} description={PHOTOS_DESCRIPTION.photo2} date={PHOTOS_DATES.photo2} />
        </div>
        <button className="summary-info__btn-add" onClick={() => getCompany()}>
          ДОБАВИТЬ ИЗОБРАЖЕНИЕ
        </button>
      </section>
      <div className="summary-info__hr"></div>
      <TitleModal />
      <SummaryInfoModal />
      <ContactsModal />
      <footer>
        © 1992 - 2020 Честный Агент © Все права защищены. <br />8 (495) 150-21-12{' '}
      </footer>
    </main>
  )
}
export default MainBlock
