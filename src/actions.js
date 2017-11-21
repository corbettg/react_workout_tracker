import C from './constants'

export function addDatabase(title, link, proxy, advisory, description) {
  var id = Math.floor(Math.random(1) * 100);
  //ADD APP LOGIC HERE
  return {
    type: C.ADD_DATABASE,
    payload: {id, title, link, proxy, advisory, description}
  }
}
export function editDatabase(id, title, link, proxy, advisory, description) {
  //ADD APP LOGIC HERE
  return {
    type: C.EDIT_DATABASE,
    payload: {id, title, link, proxy, advisory, description}
  }
}
export function removeDatabase(id) {
  //ADD APP LOGIC HERE
  return {
    type: C.REMOVE_DATABASE,
    payload: id
  }
}

export function updateCurrentDatabase(id, title, link, proxy, advisory, description) {
  //ADD APP LOGIC HERE
  return {
    type: C.UPDATE_CURRENT_DATABASE,
    payload: {id, title, link, proxy, advisory, description}
  }
}
export function clearCurrentDatabase() {
  //ADD APP LOGIC HERE
  return {
    type: C.CLEAR_CURRENT_DATABASE,
    payload: { "id": null, "title": "", "link": "", "proxy": "No", "advisory": "", "description": ""}
  }
}

export function updateCurrentAction(action) {
  //ADD APP LOGIC HERE
  return {
    type: C.UPDATE_CURRENT_ACTION,
    payload: action
  }
}

export function updateDatabaseListFilter(letter) {
  return {
    type: C.UPDATE_DATABASE_LIST_FILTER,
    payload: letter
  }
}
