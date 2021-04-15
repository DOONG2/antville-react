import { combineReducers } from 'redux'
import view from './Slices/view'

const rootReducer = combineReducers({ view: view.reducer })

export default rootReducer
