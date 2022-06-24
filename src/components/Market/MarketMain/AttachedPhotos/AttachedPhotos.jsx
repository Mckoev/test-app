import React from 'react'
import './AttachedPhotos.css'

function AttachedPhotos({ photo, description, date }) {
  return (
    <figure>
      <img src={photo} alt="stoun" />
      <button className="summary__info-btn"></button>
      <figcaption className="summary__info-photo-subscription">{description}</figcaption>
      <figcaption className="summary__info-photo-date">{date}</figcaption>
    </figure>
  )
}

export default AttachedPhotos
