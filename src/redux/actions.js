/*
 * action types
 */

const actionTypes = {
  SELECT_ORGANIZATION: 'SELECT_ORGANIZATION',
  SELECT_TABLE: 'SELECT_TABLE',
}

export { actionTypes }

/*
 * action creators
 */

export function selectOrganization(orgId) {
  return { type: actionTypes.SELECT_ORGANIZATION, orgId }
}

export function selectTable(tableId) {
  return { type: actionTypes.SELECT_TABLE, tableId }
}
