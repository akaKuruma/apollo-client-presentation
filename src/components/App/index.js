import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => {
  const { appStore: { selectedOrganization, selectedTable }} = state
  return { selectedOrganization, selectedTable }
}

export default connect(mapStateToProps)(App)
