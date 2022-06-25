const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia290IiwiaWF0IjoxNjU2MTExMDEzLCJleHAiOjE2NTY3MTU4MTN9.YZKjaNRJ-XFf_uV61ndQUxcw6cIuwnU7rPQXyNLT6VQ'

const URL = 'http://135.181.35.61:2112/companies/12'

export async function fetchCompanies() {
  console.log('FETCH START')

  let xhr = new XMLHttpRequest()

  xhr.open('GET', URL)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)

  xhr.send()

  xhr.onload = function () {
    console.log(xhr.response)
    let answer = JSON.parse(xhr.response)
    console.log(answer)
    console.log(answer.id)
    console.log(answer.name)
    if (xhr.status !== 200) {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`)
    } else {
      console.log(`Готово, получили ${xhr.response.length} байт`)
    }
  }

  xhr.onerror = function () {
    console.log('Запрос не удался')
  }
}
