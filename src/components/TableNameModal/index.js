import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import gql from 'graphql-tag'

import { selectTable } from '../../redux/actions'
import TableNameModal from './TableNameModal'

const query = gql`
  query fetchTable($tableId: ID!) {
    oneTable(id: $tableId) {
      id
      name
    }
  }
`
const mutation = gql`
  mutation TableTitleMutation($tableId: ID!, $name: String!) {
    updateTable(input: {id: $tableId, name: $name}) {
      table {
        id
        name
      }
    }
  }
`
const queryParams = {
  options: ({ selectedTable }) => ({ variables: { tableId: selectedTable } })
}

const mapDispatchToProps = (dispatch) => (
  {
    closeModal: () => dispatch(selectTable(null))
  }
)

export default compose(
  graphql(query, queryParams),
  graphql(mutation),
  connect(null, mapDispatchToProps)
)(TableNameModal)
