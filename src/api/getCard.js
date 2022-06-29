import { METHOD, token, URL_COMPANIES, URL_CONTACTS } from './api_data'
import { store } from '../reduxToolkit'
import { shortName, full_name, contract, form, type, full_notation, telephone, email } from '../reduxToolkit/toolkitSlice'

export const getCompany = () => {
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.GET, URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send()
  xhr.onload = function () {
    let answer = JSON.parse(xhr.response)
    const date = new Date(answer.contract.issue_date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const contract_day = `${answer.contract.no} от ${day}.${month < 10 ? '0' + month : month}.${year}`
    const type_answer = answer.type.map(function (item) {
      switch (item) {
        case 'agent':
          return 'Агент'
        case 'contractor':
          return 'Подрядчик'
        default:
          return null
      }
    })

    store.dispatch(shortName(answer.shortName))
    store.dispatch(full_notation(answer.name))
    store.dispatch(contract(contract_day))
    store.dispatch(form(answer.businessEntity))
    store.dispatch(type(type_answer.join(', ')))
  }
}

export const getContacts = () => {
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.GET, URL_CONTACTS)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send()
  xhr.onload = function () {
    let answer_contacts = JSON.parse(xhr.response)
    const fullName = answer_contacts.lastname + ' ' + answer_contacts.firstname + ' ' + answer_contacts.patronymic
    const str = answer_contacts.phone
    const phone = `+${str[0]}(${str[1]}${str[2]}${str[3]})${str[4]}${str[5]}${str[6]}-${str[7]}${str[8]}-${str[9]}${str[10]}`
    store.dispatch(full_name(fullName))
    store.dispatch(telephone(phone))
    store.dispatch(email(answer_contacts.email))
  }
}
