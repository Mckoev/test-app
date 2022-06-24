import React from 'react'
import './AttachedPhotos.css'

function AttachedPhotos({ photo, description, date }) {
  return (
    <figure>
      <img src={photo} alt="stoun" />
      <button className="photos__btn"></button>
      <figcaption className="photos__info-photo-subscription">{description}</figcaption>
      <figcaption className="photos__info-photo-date">{date}</figcaption>
    </figure>
  )
}

export default AttachedPhotos
