import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import '../../../stylesheets/components/companycard.scss'

export default function CompanyCard({ company }) {
  const { name, email, about, location } = company

  return (
    <Card.Group class="company-card-group">
      <Card class="namechange">
        <Card.Header>{name}</Card.Header>
        <Card.Content>{location}</Card.Content>
        <Card.Meta>{email}</Card.Meta>
        <Card.Description>{about}</Card.Description>
      <Card.Content className='ui two buttons'>
        <Icon name="play circle outline">
        </Icon>
        <Card.Content className='button-text'>Yeah Baby!</Card.Content>
        <Icon name="stop circle outline">
        </Icon>
        <Card.Content className='button-text'>Hell No!</Card.Content>
      </Card.Content>
      </Card>
    </Card.Group>
  )
}