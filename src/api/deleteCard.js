import { METHOD, token, URL_COMPANIES } from './api_data'
import { store } from '../reduxToolkit'
import { shortName, full_name, contract, form, type, full_notation, telephone, email } from '../reduxToolkit/toolkitSlice'

const NONE = 'none'

export const deleteCompany = () => {
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.DELETE, URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send()
  xhr.onload = function () {
    store.dispatch(shortName(NONE))
    store.dispatch(full_notation(NONE))
    store.dispatch(contract(NONE))
    store.dispatch(form(NONE))
    store.dispatch(type(NONE))
    store.dispatch(full_name(NONE))
    store.dispatch(telephone(NONE))
    store.dispatch(email(NONE))
  }
}
