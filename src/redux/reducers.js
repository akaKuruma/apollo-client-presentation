import { actionTypes } from './actions'

const initialState = {
  selectedOrganization: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ORGANIZATION:
      return { selectedOrganization: action.orgId }
    default:
      return state
  }
}

export default reducer
