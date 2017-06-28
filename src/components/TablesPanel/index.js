import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import gql from 'graphql-tag'

import { selectTable } from '../../redux/actions'
import TablesPanel from './TablesPanel'

const query = gql`
  query fetchOrganization($orgId: ID!) {
    oneOrganization(id: $orgId) {
      id
      name
      tables(first: 10){
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`
const queryParams = {
  options: ({ selectedOrganization }) => ({ variables: { orgId: selectedOrganization } })
}

const mapDispatchToProps = (dispatch) => (
  {
    onClick: (tableId) => dispatch(selectTable(tableId))
  }
)

export default compose(
  graphql(query, queryParams),
  connect(null, mapDispatchToProps)
)(TablesPanel)
