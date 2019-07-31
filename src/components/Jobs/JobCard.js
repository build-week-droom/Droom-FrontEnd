// Import dependencies
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function JobCard({ job }) {
  const { title, description, location, company, email } = job

  return (
    <Card className="job-card">
      <Image
        className="job-card-image"
        src="https://media.superpages.com/media/photos/00/16/82/41/75/images/012942721b799dcc3cdc5879624e03c3.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header className="job-card-title">{company}</Card.Header>
        <Card.Meta>
          <span className="job-card-company">{location}</span>
        </Card.Meta>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}
