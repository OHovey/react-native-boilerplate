/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  premiumUser: false,
  loggedIn: false,
  me: {},
}

// ------------------------------------
// Slice
// ------------------------------------

// {
//   username: 'easynumbers123',
//   token: '#abcfefg1234567890',
//   organizationHashId: '#nidsnvkndvsk924u93ru2fn',
//   organizationName: 'SyonCreative',
//   organizationTeamCount: '3',
//   organizationMemberCount: '9'
// }

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = payload.loggedIn,
        state.premiumUser = payload.premiumUser,
        state.checked = payload.checked,
        state.username = payload.username,
        state.token = payload.token,
        state.organizationHashId = payload.organizationHashId,
        state.organizationName = payload.organizationName,
        state.organizationTeamCount = payload.organizationTeamCount,
        state.organizationMemberCount = payload.organizationMemberCount
    },
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.premiumUser = payload.premiumUser
      state.checked = payload.checked
    },
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
  },
})

export const { action } = appSlice
export const { authenticate, saveMe, login } = appSlice.actions

export default appSlice.reducer
