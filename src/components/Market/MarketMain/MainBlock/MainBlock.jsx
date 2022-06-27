import React, { useEffect, useState } from 'react'
import photo from '../../../../img/Photo/photo.png'
import photo1 from '../../../../img/Photo/photo1.png'
import photo2 from '../../../../img/Photo/photo2.png'
import AttachedPhotos from '../attachedPhotos/AttachedPhotos'
import './MainBlock.css'
import { useSelector } from 'react-redux'
import SummaryInfoModal from '../../../modals/SummaryInfoModal'
import TitleModal from '../../../modals/TitleModal'
import ContactsModal from '../../../modals/ContactsModal'
import { getCompany, getContacts } from '../../../../api/get_request.js'
import Modal from '../../../modals/Modal'

function MainBlock({ SUMMARY_DATA, SUMMARY_INFO_DESCRIPTION, CONTACT_DETAILS, PHOTOS_DESCRIPTION, PHOTOS_DATES }) {
  useEffect(() => {
    getCompany()
    getContacts()
  }, [])

  const [titleModal_is_active, setTitleModal_is_active] = useState(false)
  const [summaryInfoModal_is_active, setSummaryInfoModal_is_active] = useState(false)
  const [contactsModal_is_active, setContactsModal_is_active] = useState(false)
  const shortName = useSelector((state) => state.toolkit.shortName)
  const full = useSelector((state) => state.toolkit.full_notation)
  const contract = useSelector((state) => state.toolkit.contract)
  const form = useSelector((state) => state.toolkit.form)
  const type = useSelector((state) => state.TYPE)
  const name = useSelector((state) => state.FULL_NAME)
  const telephone = useSelector((state) => state.TELEPHONE)
  const email = useSelector((state) => state.EMAIL)
  const samstate = useSelector((state) => state)
  console.log(samstate)

  return (
    <main className="main">
      <div className="main__name">
        <div className="main__title">{shortName}</div>
        <button className="main__btn-edit" onClick={() => setTitleModal_is_active(true)}></button>
      </div>
      <section className="summary-info">
        <div className="summary-info__name">
          <div className="summaru-info__title">{SUMMARY_DATA.summary_info}</div>
          <button className="main__btn-edit" onClick={() => setSummaryInfoModal_is_active(true)}></button>
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
          <button className="main__btn-edit" onClick={() => setContactsModal_is_active(true)}></button>
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
        <button className="summary-info__btn-add">ДОБАВИТЬ ИЗОБРАЖЕНИЕ</button>
      </section>
      <div className="summary-info__hr"></div>
      <Modal is_active={titleModal_is_active} setModalIsActive={setTitleModal_is_active}>
        <TitleModal setModalIsActive={setTitleModal_is_active} />
      </Modal>
      <Modal is_active={summaryInfoModal_is_active} setModalIsActive={setSummaryInfoModal_is_active}>
        <SummaryInfoModal />
      </Modal>
      <Modal is_active={contactsModal_is_active} setModalIsActive={setContactsModal_is_active}>
        <ContactsModal />
      </Modal>
      <footer>
        © 1992 - 2020 Честный Агент © Все права защищены. <br />8 (495) 150-21-12{' '}
      </footer>
    </main>
  )
}
export default MainBlock
