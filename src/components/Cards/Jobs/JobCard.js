// Import dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

// import compnay logos
import andela from '../../../assets/images/andela-logo.png'
import epic from '../../../assets/images/epic-logo.png'
import ge from '../../../assets/images/ge-logo.png'
import impulsion from '../../../assets/images/impulsion-logo.png'
import lasercycle from '../../../assets/images/lasercycle-logo.png'
import lacausa from '../../../assets/images/lacausa-logo.png'
import paystack from '../../../assets/images/paystack-logo.png'

// Create JobCard component
export default function JobCard({ job }) {
  // Destructure props
  const { title, description, location, company, companyId } = job

  // Get company logo for each card
  let logo = ''
  switch (company) {
    case 'Andela':
      logo = andela
      break
    case 'Epic Flight Academy':
      logo = epic
      break
    case 'GE':
      logo = ge
      break
    case 'Impulsion Marketing Group':
      logo = impulsion
      break
    case 'La Causa, Inc':
      logo = lacausa
      break
    case 'LaserCycle USA':
      logo = lasercycle
      break
    case 'Paystack Nigeria':
      logo = paystack
      break
    default:
      break
  }

  // Build JobCard utilizing semantic-ui-react <Card /> & props
  return (
    <Card className="job-card">
      <Image className="job-card-image" src={logo} wrapped ui={false} />
      <Card.Content className="job-card-main-content">
        <Card.Header as="h1" className="job-card-company">
          {company}
        </Card.Header>
        <Card.Meta className="job-card-meta">
          <span className="job-card-location">{location}</span>
        </Card.Meta>
        <Card.Header as="h3" className="job-card-title">
          {title}
        </Card.Header>
        <Card.Description className="job-card-description">
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="job-card-selection">
        <Link to={`/company/${companyId}`} className="company-link">
          <div className="thumbs-up-container">
            <Icon name="thumbs up" />
          </div>
        </Link>
        <div className="thumbs-down-container">
          <Icon name="thumbs down" />
        </div>
      </Card.Content>
    </Card>
  )
}
