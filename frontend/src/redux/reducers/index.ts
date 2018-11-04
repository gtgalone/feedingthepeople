import { combineReducers, AnyAction } from 'redux'
import { reducer as formReducer } from 'redux-form'

import * as ActionTypes from '../actions'
import { RootState } from 'src/@types/types'

export const _initialState = {}

function loading(state: boolean = false, action: AnyAction) {
  const { type } = action

  if (type === ActionTypes.SET_LOADING) {
    return action.data
  }

  return state
}

const rootReducer = combineReducers<RootState>({
  form: formReducer,
  loading,
})

export default rootReducer
