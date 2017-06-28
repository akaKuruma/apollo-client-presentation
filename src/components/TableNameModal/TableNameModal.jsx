import React, { Component } from 'react';
import {
  Modal,
  form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

class TableNameModal extends Component {
  constructor(props) {
    super(props);

    const { data: { oneTable: { name, id }}} = props

    this.state = {
      tableName: name,
      tableId: id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({tableName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        tableId: this.state.tableId,
        name: this.state.tableName
      }
    }).then(() => this.props.closeModal())
  }

  renderNameForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Table name:</ControlLabel>

          <FormControl
            type="text"
            value={this.state.tableName}
            placeholder="Table name"
            onChange={this.handleChange}
          />
          <Button type="submit">
            Update
          </Button>

          <a
            href='#cancel'
            className='btn btn-danger'
            onClick={this.props.closeModal}
          >Cancel</a>
        </FormGroup>
      </form>
    )
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>
            { this.renderNameForm() }
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default TableNameModal
