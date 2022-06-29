import { METHOD, token, URL_COMPANIES } from './api_data'

export const deleteCompany = () => {
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.DELETE, URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send()
  xhr.onload = function () {
    console.log(xhr.status, xhr.statusText)
  }
}
