import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

export default function CompanyCard({ company }) {
  const { id, name, email, about, location, profileImg } = company

  const logoUrl = {
    Andela: 'https://cutlerpr.co/images/case-studies/andela-logo.png',
    'Epic Flight Academy':
      'https://pbs.twimg.com/profile_images/992783731558502406/zPy4_QQu_400x400.jpg',
    GE:
      'https://s3.amazonaws.com/cms.ipressroom.com/112/files/201511/56657cc65e8eef34bab82326_GELogo_Blue_CMYK/GELogo_Blue_CMYK_08b35dd1-9467-481d-9bf9-d0045a322953-prv.jpg',
    'Impulsion Marketing Group':
      'https://media.licdn.com/dms/image/C561BAQHlmAnipOC7LA/company-background_10000/0?e=2159024400&v=beta&t=6ozsiTZJ616qX3f-1PlOEr-d01pUWW71o7AWyOwL6fk',
    'La Causa, Inc':
      'https://pbs.twimg.com/profile_images/753229372316913664/zfDlSifo.jpg',
    'LaserCycle USA':
      'https://media.superpages.com/media/photos/00/16/82/41/75/images/012942721b799dcc3cdc5879624e03c3.jpg',
    'Paystack Nigeria':
      'https://pbs.twimg.com/profile_images/810741743436124160/sfGjeR7F_400x400.jpg'
  }

  // Get / set company logo
  let logo = ''
  if (logoUrl.hasOwnProperty(company)) {
    logo = logoUrl[company]
  }

  return (
    <Card className="company-card">
      <Image className="job-card-image" src={logo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Content>{about}</Card.Content>
        <Card.Meta>{location}</Card.Meta>
        <Card.Meta>{email}</Card.Meta>
      </Card.Content>
    </Card>
  )
}
