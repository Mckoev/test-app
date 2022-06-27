import { token, URL_COMPANIES } from './api_data'
import { store } from '../reduxToolkit'
import { shortName, full_notation, contract, form, type } from '../reduxToolkit/toolkitSlice'

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
  const body = JSON.stringify({ name: full_notation_modal, businessEntity: form_modal, contract: { issue_date: contract_modal }, type: type_modal })
  let xhr = new XMLHttpRequest()
  xhr.open('PATCH', URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    console.log(xhr)
    const answer = JSON.parse(xhr.response)
    console.log(answer)
    // const date = new Date(answer.contract.issue_date)
    // const year = date.getFullYear()
    // const month = date.getMonth() + 1
    // const day = date.getDate()
    // const contract_day = `${answer.contract.no} от ${day}.${month < 10 ? '0' + month : month}.${year}`
    // const type_answer = answer.type.map(function (item) {
    //   switch (item) {
    //     case 'agent':
    //       return 'Агент'
    //     case 'contractor':
    //       return 'Подрядчик'
    //     default:
    //       return null
    //   }
    // })
    // store.dispatch(full_notation(answer.name))
    // store.dispatch(contract(contract_day))
    // store.dispatch(form(answer.businessEntity))
    // store.dispatch(type(type_answer.join(', ')))

    xhr.onerror = function () {
      console.log('error')
    }
  }
}
