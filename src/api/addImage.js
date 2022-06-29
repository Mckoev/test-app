import { METHOD, token, URL_IMAGE } from './api_data'
export const addImage = (e) => {
  e.preventDefault()
  const file = e.target.files[0]
  const path = URL.createObjectURL(file)
  let formElement = document.forms.form_image
  let formData = new FormData(formElement)
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.POST, URL_IMAGE)
  xhr.setRequestHeader('Content-Type', 'multipart/form-data')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  formData.append(file, path)
  xhr.send(formData)
  xhr.onload = function () {
    console.log(xhr.status, xhr.statusText)
  }
}
