import C from '../constants'
import { combineReducers } from 'redux'

export const modal = (state=[], action ) => {
    switch(action.type) {
      case C.DISPLAY_MODAL:
          return action.payload
      default:
          return state
    }
}

export const user = (state=[], action ) => {
    switch(action.type) {
      case C.UPDATE_USER_INFO:
          return action.payload
      case C.CLEAR_USER_INFO:
          return action.payload
      default:
          return state
    }
}

export const database = (state=null, action) =>
    (action.type === C.ADD_DATABASE) ? action.payload : state

export const allDatabases = (state=[], action ) => {
    switch(action.type) {
      case C.UPDATE_ALL_DATABASES:
          return action.payload
      case C.ADD_DATABASE:
          //What is happening below is that we are checking to see if the title already exists. If it does, we do not update state
          const hasTitle = state.some(database => database.resourceName === action.payload.resourceName)
          return (hasTitle) ? state : [ ...state, database(null, action)]
      case C.EDIT_DATABASE:
          return state.map(database => database.id === action.payload.id ? action.payload : database)
      case C.REMOVE_DATABASE:
          return state.filter(database => database.id !== action.payload)
      default:
          return state
    }
}

export const currentDatabase = (state=[], action) => {
    switch (action.type) {
      case C.UPDATE_CURRENT_DATABASE:
          return action.payload
      case C.CLEAR_CURRENT_DATABASE:
          return action.payload
      default:
          return state
    }
}

export const currentAction = (state=[], action) => {
    switch (action.type) {
      case C.UPDATE_CURRENT_ACTION:
          return action.payload
      default:
          return state
    }
}

export const databaseListFilter = (state=[], action) => {
    switch (action.type) {
      case C.UPDATE_DATABASE_LIST_FILTER:
          return action.payload
      default:
          return state
    }
}

export default combineReducers({
    modal,
    user,
    allDatabases,
    currentDatabase,
    currentAction,
    databaseListFilter
})
