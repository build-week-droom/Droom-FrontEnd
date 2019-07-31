import React from 'react';
import { Card, Image } from 'semantic-ui-react'

export default function CompanyCard({ company }) {
  const { name, email, about, location, profileImg } = company

  return (
    <div className="company-card">
      <Card>
        <Image src={profileImg} />
      </Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Content>{about}</Card.Content>
        <Card.Meta>{location}</Card.Meta>
        <Card.Meta>{email}</Card.Meta>
      </Card.Content>
    </div>

  )
}
