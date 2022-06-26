const defaultState = {
  SHORT_NAME: 'def',
  FULL_NOTATION: 'default',
  CONTRACT: 'default',
  FORM: 'def',
  TYPE: 'def',
  FULL_NAME: 'def',
  TELEPHONE: 'def',
  EMAIL: 'def',
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUMMARY_DATA':
      return { ...state, SHORT_NAME: action.SHORT_NAME, FULL_NOTATION: action.FULL_NOTATION, CONTRACT: action.CONTRACT, FORM: action.FORM, TYPE: action.TYPE }
    case 'CONTACT_DETAILS':
      return { ...state, FULL_NAME: action.FULL_NAME, TELEPHONE: action.TELEPHONE, EMAIL: action.EMAIL }
    default:
      return state
  }
}
