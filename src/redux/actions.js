/*
 * action types
 */

const actionTypes = {
  SELECT_ORGANIZATION: 'SELECT_ORGANIZATION',
}

export { actionTypes }

/*
 * action creators
 */

export function selectOrganization(orgId) {
  return { type: actionTypes.SELECT_ORGANIZATION, orgId }
}
