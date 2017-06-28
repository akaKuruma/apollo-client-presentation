import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import OrganizationsPanel from './components/OrganizationsPanel'

class App extends Component {

  renderGrid() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <OrganizationsPanel />
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
