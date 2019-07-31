// Import dependencies
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

// Create JobCard component
export default function JobCard({ job }) {
  // Destructure props
  const { title, description, location, company, companyId } = job

  // Get / Set card color based on company name *experimental with seed data* company colors: GE - yellow, laser

  // Build JobCard utilizing semantic-ui-react <Card /> & props
  return (
    <Card className="job-card">
      <Image
        className="job-card-image"
        src="https://media.superpages.com/media/photos/00/16/82/41/75/images/012942721b799dcc3cdc5879624e03c3.jpg"
        wrapped
        ui={false}
      />
      <Card.Content className="job-card-main-content">
        <Card.Header className="job-card-company">{company}</Card.Header>
        <Card.Meta>
          <span className="job-card-location">{location}</span>
        </Card.Meta>
        <Card.Header className="job-card-title">{title}</Card.Header>
        <Card.Description className="job-card-description">
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="job-card-selection">
        <a>
          <Icon name="user" />
          Yeah Baby!
        </a>
        <a>
          <Icon name="user" />
          Hell No!
        </a>
      </Card.Content>
    </Card>
  )
}
