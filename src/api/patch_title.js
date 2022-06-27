import { token, URL_COMPANIES } from './api_data'
import { store } from '../redux/store/store'
import { summaryDataAction } from '../redux/store/reducers/reducer'

export const updateTitle = (name) => {
  const body = JSON.stringify({ shortName: name })
  let xhr = new XMLHttpRequest()
  xhr.open('PATCH', URL_COMPANIES)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send(body)
  xhr.onload = function () {
    const answer = JSON.parse(xhr.response)
    store.dispatch(summaryDataAction({ SHORT_NAME: answer.shortName }))
  }
}
