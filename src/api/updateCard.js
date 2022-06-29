import { METHOD, token, URL_COMPANIES, URL_CONTACTS } from './api_data'
import { store } from '../reduxToolkit'
import { shortName, full_notation, contract, form, type, full_name, telephone, email } from '../reduxToolkit/toolkitSlice'

export const updateTitle = (e) => {
  const name = e.target[0].value
  const body = JSON.stringify({ shortName: name })
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.PATCH, URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    const answer = JSON.parse(xhr.response)
    store.dispatch(shortName(answer.shortName))
  }
  xhr.onerror = function () {
    alert('error request')
  }
}

export const updateSummaryInfo = (e) => {
  const full_notation_modal = e.target[0].value
  const contract_modal = e.target[1].value.split(' ')
  const form_modal = e.target[2].value
  const type_modal = e.target[3].value.split(' ')
  const body = JSON.stringify({
    name: full_notation_modal,
    businessEntity: form_modal,
    contract: { no: contract_modal[0] },
    type: type_modal,
  })
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.PATCH, URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    const answer = JSON.parse(xhr.response)
    const contract_day = `${answer.contract.no} от ${contract_modal.length === 2 ? contract_modal[1] : contract_modal[2]}`
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
  }
  xhr.onerror = function () {
    alert('error request')
  }
}

export const updateContacts = (e) => {
  const fullName = e.target[0].value.split(' ')

  const tel = e.target[1].value[0] === '+' ? e.target[1].value.slice(1) : e.target[1].value
  const mail = e.target[2].value
  const body = JSON.stringify({
    lastname: fullName[0],
    firstname: fullName[1],
    patronymic: fullName[2],
    phone: tel,
    email: mail,
  })
  let xhr = new XMLHttpRequest()
  xhr.open(METHOD.PATCH, URL_CONTACTS)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    let answer = JSON.parse(xhr.response)
    const fullName = answer.lastname + ' ' + answer.firstname + ' ' + answer.patronymic
    const str = answer.phone
    const phone = `+7(${str[1]}${str[2]}${str[3]})${str[4]}${str[5]}${str[6]}-${str[7]}${str[8]}-${str[9]}${str[10]}`
    store.dispatch(full_name(fullName))
    store.dispatch(telephone(phone))
    store.dispatch(email(answer.email))
  }
  xhr.onerror = function () {
    alert('error request')
  }
}
