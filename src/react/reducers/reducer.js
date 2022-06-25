import { action } from '../actions/action'

const defaultState = {
  main_title: ' default Перспективные  default  захоронения',
  summary_info: 'default ОБЩАЯ default ИНФОРМАЦИЯ',
  contacts: 'default КОНТАКТНЫЕ default ДАННЫЕ',
  added_photo: 'default ПРИЛОЖЕННЫЕ default ФОТО',
}

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}
