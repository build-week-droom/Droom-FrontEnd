import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import '../../../stylesheets/components/companycard.scss'

export default function CompanyCard({ company }) {
  const { id, name, email, about, location, profileImg } = company
  console.log('company props: ', company)

  return (
    <Card className="company-card">
      <Image className="job-card-image" wrapped ui={false} />
      <Card.Content className="job-card-main-content">
        <Card.Header className="job-card-company">{name}</Card.Header>
        <Card.Header className="job-card-location">{location}</Card.Header>
        <Card.Meta>
          <span className="job-card-location">{email}</span>
        </Card.Meta>
        <Card.Description className="job-card-description">
          {about}
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
