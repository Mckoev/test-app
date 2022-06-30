import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
  name: 'summaryData',
  initialState: {
    shortName: 'none',
    full_notation: 'none',
    contract: 'none',
    form: 'none',
    type: 'none',
    full_name: 'none',
    telephone: 'none',
    email: 'none',
  },
  reducers: {
    shortName(state, action) {
      state.shortName = action.payload
    },
    full_notation(state, action) {
      state.full_notation = action.payload
    },
    contract(state, action) {
      state.contract = action.payload
    },
    form(state, action) {
      state.form = action.payload
    },
    type(state, action) {
      state.type = action.payload
    },
    full_name(state, action) {
      state.full_name = action.payload
    },
    telephone(state, action) {
      state.telephone = action.payload
    },
    email(state, action) {
      state.email = action.payload
    },
  },
})

export default toolkitSlice.reducer
export const { shortName, full_notation, contract, form, type, full_name, telephone, email } = toolkitSlice.actions
