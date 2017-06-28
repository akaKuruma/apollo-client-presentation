import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import OrganizationsPanel from '../OrganizationsPanel'
import TablesPanel from '../TablesPanel'
import TableNameModal from '../TableNameModal'

class App extends Component {
  renderGrid(selectedOrganization) {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <OrganizationsPanel />
          </Col>

          <Col xs={12} md={4}>
            { selectedOrganization && <TablesPanel selectedOrganization={selectedOrganization} /> }
          </Col>
        </Row>
      </Grid>
    )
  }

  render() {
    const { selectedOrganization, selectedTable } = this.props

    return (
      <div>
        <Jumbotron>
          <h1>React CWB Meetup</h1>
          <p>The basic about Apollo Client (React Apollo)</p>
        </Jumbotron>

        { this.renderGrid(selectedOrganization) }
        { selectedTable && <TableNameModal selectedTable={selectedTable} />}

      </div>
    );
  }
}

export default App;
