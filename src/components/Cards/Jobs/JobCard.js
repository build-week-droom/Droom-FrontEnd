// Import dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

// Create JobCard component
export default function JobCard({ job }) {
  // Destructure props
  const { title, description, location, company, companyId } = job

  // ** TEMPORARY FOR TESTING ** Create company logo object for JobCard images
  const logoUrl = {
    Andela: 'https://cutlerpr.co/images/case-studies/andela-logo.png',
    'Impulsion Marketing Group':
      'https://media.licdn.com/dms/image/C561BAQHlmAnipOC7LA/company-background_10000/0?e=2159024400&v=beta&t=6ozsiTZJ616qX3f-1PlOEr-d01pUWW71o7AWyOwL6fk'
  }

  // Get / set company logo
  let logo
  logoUrl.hasOwnProperty(company) ? (logo = logoUrl[company]) : (logo = '')

  // **EXPERIMENTAL, USING SEED DATA**
  //  Set card's highlight color based on company's name
  //  (may change from company to job category if filtering becomes available)
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
        <Link to={`/company/${companyId}`}>
          <div>
            <Icon name="user" />
            Yeah Baby!
          </div>
        </Link>
        <div>
          <Icon name="user" />
          Hell No!
        </div>
      </Card.Content>
    </Card>
  )
}
