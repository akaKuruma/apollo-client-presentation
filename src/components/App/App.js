import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import OrganizationsPanel from '../OrganizationsPanel'
import TablesPanel from '../TablesPanel'

class App extends Component {

  renderGrid() {
    const { selectedOrganization } = this.props
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
    return (
      <div>
        <Jumbotron>
          <h1>React CWB Meetup</h1>
          <p>The basic about Apollo Client (React Apollo)</p>
        </Jumbotron>
        {this.renderGrid()}
      </div>
    );
  }
}

export default App;
