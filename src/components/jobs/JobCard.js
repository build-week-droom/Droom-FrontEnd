// Import dependencies
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function JobCard({ job }) {
  const { title, description, location, company, email } = job

  return (
    <div className="job-card">
      <Card>
        <Image src="../../assets/images/laserCycle.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{company}</Card.Header>
          <Card.Meta>
            <span className="location">{location}</span>
          </Card.Meta>
          <Card.Header></Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  )
}
