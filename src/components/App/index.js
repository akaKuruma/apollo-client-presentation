import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = ({appStore: {selectedOrganization}}) => ({ selectedOrganization })

export default connect(mapStateToProps)(App)
