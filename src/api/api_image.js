import { createSlice } from '@reduxjs/toolkit'
import { token, URL_IMAGE } from './api_data'

export const addImage = (path, name) => {
  let formElement = document.forms.form_image
  let formData = new FormData(formElement)

  console.log(path)
  let xhr = new XMLHttpRequest()
  xhr.open('POST', URL_IMAGE)
  formData.append(name, path)

  for (let [name, value] of formData) {
    console.log(`${name} ${value}`)
  }
  xhr.setRequestHeader('Content-Type', 'multipart/form-data')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(formData)
  xhr.onload = function () {
    console.log(xhr)
  }
}
