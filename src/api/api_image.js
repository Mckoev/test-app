import { token, URL_IMAGE } from './api_data'

export const addImage = (file, path) => {
  console.log(file + '   ' + path)

  let img = document.createElement('img')
  img.src = path
  document.body.append(img)

  let formElement = document.forms.form_image
  let formData = new FormData(formElement)
  let xhr = new XMLHttpRequest()
  xhr.open('POST', URL_IMAGE)
  xhr.setRequestHeader('Content-Type', 'multipart/form-data')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  formData.append(file, path)
  for (let [name, value] of formData) {
    console.log(`${name} ${value}`)
  }
  xhr.send(formData)
  xhr.onload = function () {
    console.log(xhr)
  }
}
