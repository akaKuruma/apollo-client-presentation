import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Spinner from 'react-spinkit';

const renderTable = (table, onClick) => {
  if (!table) return

  return (
    <ListGroupItem key={table.id} onClick={() => onClick(table.id)}>
      {table.name}
    </ListGroupItem>
  )
}

const TablePanel = ({ data, onClick }) => {
  const { loading, error } = data

  if (loading) return (<Spinner name="pacman" color="blue"/>)
  if (error) return (<span>{ error }</span>)

  const { oneOrganization: { tables: { edges } } } = data

  return (
    <ListGroup>
      { edges.map((edge) => renderTable(edge.node, onClick)) }
    </ListGroup>
  )
}

export default TablePanel
