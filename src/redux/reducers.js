import { actionTypes } from './actions'

const initialState = {
  selectedOrganization: null,
  selectedTable: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ORGANIZATION:
      return {
        ...state,
        selectedOrganization: action.orgId
      }
    case actionTypes.SELECT_TABLE:
      return {
        ...state,
        selectedTable: action.tableId
      }
    default:
      return state
  }
}

export default reducer
