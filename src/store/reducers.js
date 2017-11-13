import C from '../constants'
import { combineReducers } from 'redux'

export const database = (state=null, action) =>
    (action.type === C.ADD_DATABASE) ? action.payload : state

export const allDatabases = (state=[], action ) => {
    switch(action.type) {
      case C.ADD_DATABASE:
          //What is happening below is that we are checking to see if the title already exists. If it does, we do not update state
          const hasTitle = state.some(database => database.title === action.payload.title)
          return (hasTitle) ? state : [ ...state, database(null, action)]
      case C.EDIT_DATABASE:
          return state.map(database => database.id === action.payload.id ? action.payload : database)
      case C.REMOVE_DATABASE:
          return state.filter(database => database.id !== action.payload)
      default:
          return state
    }

}

export default combineReducers({
    allDatabases
})
