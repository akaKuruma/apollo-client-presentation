import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Spinner from 'react-spinkit';

const renderOrg = (org, onClick) => (
  <ListGroupItem key={org.id} onClick={() => onClick(org.id)}>
    {org.name}
  </ListGroupItem>
)

const OrganizationsPanel = ({ data, onClick }) => {
  const { loading, error, organizations } = data

  if (loading) return (<Spinner name="pacman" color="blue"/>)
  if (error) return (<span>{ error }</span>)

  return (
    <ListGroup>
      { organizations.map((org) => renderOrg(org, onClick)) }
    </ListGroup>
  )
}

export default OrganizationsPanel
