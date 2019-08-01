import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import '../../../stylesheets/components/companycard.scss'

export default function CompanyCard({ company }) {
<<<<<<< HEAD
  const { name, email, about, location } = company
=======
  const { id, name, email, about, location, profileImg } = company
>>>>>>> 9e18f417e6eec9eebf3076346e86fcb522561688

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

  let jobCardHighlight = ''
  switch (company) {
    case 'Andela':
      jobCardHighlight = 'teal'
      break
    case 'Epic Flight Academy':
      jobCardHighlight = 'purple'
      break
    case 'GE':
      jobCardHighlight = 'blue'
      break
    case 'Impulsion Marketing Group':
      jobCardHighlight = 'yellow'
      break
    case 'La Causa, Inc':
      jobCardHighlight = 'red'
      break
    case 'LaserCycle USA':
      jobCardHighlight = 'green'
      break
    case 'Paystack Nigeria':
      jobCardHighlight = 'violet'
      break
    default:
      jobCardHighlight = 'gray'
  }
  
  return (
<<<<<<< HEAD
    <Card className="company-card" color={jobCardHighlight}>
      <Image className="job-card-image" src={logo} wrapped ui={false} />
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
=======
    <Card className="company-card">
      <Image className="job-card-image" src={logo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Content>{about}</Card.Content>
        <Card.Meta>{location}</Card.Meta>
        <Card.Meta>{email}</Card.Meta>
>>>>>>> 9e18f417e6eec9eebf3076346e86fcb522561688
      </Card.Content>
    </Card>
  )
}


