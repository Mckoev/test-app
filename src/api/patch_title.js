import { token, URL_COMPANIES, URL_CONTACTS } from './api_data'
import { store } from '../reduxToolkit'
import { shortName, full_notation, contract, form, type, full_name, telephone, email } from '../reduxToolkit/toolkitSlice'

export const updateTitle = (name) => {
  const body = JSON.stringify({ shortName: name })
  let xhr = new XMLHttpRequest()
  xhr.open('PATCH', URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    const answer = JSON.parse(xhr.response)
    store.dispatch(shortName(answer.shortName))
  }
}

export const updateSummaryInfo = (full_notation_modal, contract_modal, form_modal, type_modal) => {
  console.log(full_notation_modal, contract_modal, form_modal, type_modal)
  console.log(contract_modal[1])
  console.log(new Date(contract_modal[1]))
  const body = JSON.stringify({
    name: full_notation_modal,
    businessEntity: form_modal,
    contract: { no: contract_modal[0], issue_date: new Date(contract_modal[1]) },
    type: type_modal,
  })
  console.log(body)
  let xhr = new XMLHttpRequest()
  xhr.open('PATCH', URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    const answer = JSON.parse(xhr.response)
    console.log(answer)
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
    store.dispatch(full_notation(answer.name))
    store.dispatch(contract(contract_day))
    store.dispatch(form(answer.businessEntity))
    store.dispatch(type(type_answer.join(', ')))

    xhr.onerror = function () {
      console.log('error request')
    }
  }
}

export const updateContacts = (fullName, tel, mail) => {
  const body = JSON.stringify({
    lastname: fullName[0],
    firstname: fullName[1],
    patronymic: fullName[2],
    phone: tel,
    email: mail,
  })
  console.log(body)
  let xhr = new XMLHttpRequest()
  xhr.open('PATCH', URL_CONTACTS)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    let answer_contacts = JSON.parse(xhr.response)
    console.log(answer_contacts)
    const fullName = answer_contacts.lastname + ' ' + answer_contacts.firstname + ' ' + answer_contacts.patronymic
    const str = answer_contacts.phone
    const phone = `+${str[0]}(${str[1]}${str[2]}${str[3]})${str[4]}${str[5]}${str[6]}-${str[7]}${str[8]}-${str[9]}${str[10]}`
    store.dispatch(full_name(fullName))
    store.dispatch(telephone(phone))
    store.dispatch(email(answer_contacts.email))
  }
}
