// Import dependencies
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

// Create JobCard component
export default function JobCard({ job }) {
  // Destructure props
  const { title, description, location, company, companyId } = job

  // ** TEMPORARY FOR TESTING ** Create company logo object for JobCard images
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

  // Get / Set card color based on company name *experimental with seed data*. Possibly use to highlight cards based on job category or company.

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

  // Build JobCard utilizing semantic-ui-react <Card /> & props
  return (
    <Card className="job-card" color={jobCardHighlight}>
      <Image className="job-card-image" src={logo} wrapped ui={false} />
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
