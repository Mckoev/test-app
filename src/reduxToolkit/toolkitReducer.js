import { createReducer, createAction } from '@reduxjs/toolkit'


const SUMMARY_DATA = 'SUMMARY_DATA'
const CONTACT_DETAILS = 'CONTACT_DETAILS'

const initialState = {
  SHORT_NAME: 'def',
  FULL_NOTATION: 'default',
  CONTRACT: 'default',
  FORM: 'def',
  TYPE: 'def',
  FULL_NAME: 'def',
  TELEPHONE: 'def',
  EMAIL: 'def',
}

const summaryDataAction = createAction( type: SUMMARY_DATA )

export default createReducer(initialState, {

})
