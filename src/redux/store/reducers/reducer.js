const SUMMARY_DATA = 'SUMMARY_DATA'
const CONTACT_DETAILS = 'CONTACT_DETAILS'

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
    case SUMMARY_DATA:
      return {
        ...state,
        SHORT_NAME: action.payload.SHORT_NAME,
        FULL_NOTATION: action.payload.FULL_NOTATION,
        CONTRACT: action.payload.CONTRACT,
        FORM: action.payload.FORM,
        TYPE: action.payload.TYPE,
      }
    case CONTACT_DETAILS:
      return { ...state, FULL_NAME: action.payload.FULL_NAME, TELEPHONE: action.payload.TELEPHONE, EMAIL: action.payload.EMAIL }
    default:
      return state
  }
}

export const summaryDataAction = (payload) => ({ type: SUMMARY_DATA, payload })
export const contactDetailsAction = (payload) => ({ type: CONTACT_DETAILS, payload })
