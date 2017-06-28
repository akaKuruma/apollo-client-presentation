import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import gql from 'graphql-tag'

import OrganizationsPanel from './OrganizationsPanel'
import { selectOrganization } from '../../redux/actions'

const query = gql`{
  organizations {
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
}`

const mapDispatchToProps = (dispatch) => (
  {
    onClick: (organizationId) => dispatch(selectOrganization(organizationId))
  }
)

export default compose(
  graphql(query, { options: { notifyOnNetworkStatusChange: true } }),
  connect(null, mapDispatchToProps)
)(OrganizationsPanel)

