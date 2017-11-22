import C from './constants'

export function addDatabase(resourceName, resourceType, link, resourceAdvisory, resourceAdvisoryText, shortDescription, longDescription, coverageDates, access, vendor) {
  var id = Math.floor(Math.random(1) * 100);
  //ADD APP LOGIC HERE
  return {
    type: C.ADD_DATABASE,
    payload: {id, resourceName, resourceType, link, resourceAdvisory, resourceAdvisoryText, shortDescription, longDescription, coverageDates, access, vendor}
  }
}
export function editDatabase(id, resourceName, resourceType, link, resourceAdvisory, resourceAdvisoryText, shortDescription, longDescription, coverageDates, access, vendor) {
  //ADD APP LOGIC HERE
  return {
    type: C.EDIT_DATABASE,
    payload: {id, resourceName, resourceType, link, resourceAdvisory, resourceAdvisoryText, shortDescription, longDescription, coverageDates, access, vendor}
  }
}
export function removeDatabase(id) {
  //ADD APP LOGIC HERE
  return {
    type: C.REMOVE_DATABASE,
    payload: id
  }
}

export function updateCurrentDatabase(id, resourceName, resourceType, link, resourceAdvisory, resourceAdvisoryText, shortDescription, longDescription, coverageDates, access, vendor) {
  //ADD APP LOGIC HERE
  return {
    type: C.UPDATE_CURRENT_DATABASE,
    payload: {id, resourceName, resourceType, link, resourceAdvisory, resourceAdvisoryText, shortDescription, longDescription, coverageDates, access, vendor}
  }
}
export function clearCurrentDatabase() {
  //ADD APP LOGIC HERE
  return {
    type: C.CLEAR_CURRENT_DATABASE,
    payload: { "id": null, "resourceName": "", "resourceType": "None", "link": "", "resourceAdvisory": "None", "resourceAdvisoryText": "",
      "shortDescription": "", "longDescription": "", "coverageDates": "", "access": "Free", "vendor": ""}
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
