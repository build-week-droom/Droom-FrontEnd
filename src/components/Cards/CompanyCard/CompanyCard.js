import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import '../../../stylesheets/components/companycard.scss'

export default function CompanyCard({ company }) {
  const { name, email, about, location } = company

  // const logoUrl = {
  //   'Andela': 'https://cutlerpr.co/images/case-studies/andela-logo.png',
  //   'Epic Flight Academy':
  //     'https://pbs.twimg.com/profile_images/992783731558502406/zPy4_QQu_400x400.jpg',
  //   'GE':
  //     'https://s3.amazonaws.com/cms.ipressroom.com/112/files/201511/56657cc65e8eef34bab82326_GELogo_Blue_CMYK/GELogo_Blue_CMYK_08b35dd1-9467-481d-9bf9-d0045a322953-prv.jpg',
  //   'Impulsion Marketing Group':
  //     'https://media.licdn.com/dms/image/C561BAQHlmAnipOC7LA/company-background_10000/0?e=2159024400&v=beta&t=6ozsiTZJ616qX3f-1PlOEr-d01pUWW71o7AWyOwL6fk',
  //   'La Causa, Inc':
  //     'https://pbs.twimg.com/profile_images/753229372316913664/zfDlSifo.jpg',
  //   'LaserCycle USA':
  //     'https://media.superpages.com/media/photos/00/16/82/41/75/images/012942721b799dcc3cdc5879624e03c3.jpg',
  //   'Paystack Nigeria':
  //     'https://pbs.twimg.com/profile_images/810741743436124160/sfGjeR7F_400x400.jpg'
  // }
  // let logo = ''
  // if (logoUrl.hasOwnProperty(company)) {
  //   logo = logoUrl[company]
  // }


//   return (
//     <Card className="company-card">
//       <Image className="company-card-image" wrapped ui={false} />
//       <Card.Content className="main-content">
//         <Card.Header className="company-card-name">{name}</Card.Header>
//         <Card.Header className="company-card-location">{location}</Card.Header>
//         <Card.Meta>
//           <span className="company-card-location">{email}</span>
//         </Card.Meta>
//         <Card.Description className="company-card-description">
//           {about}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra className="company-card-selection">
//         <a>
//           <Icon name="user" />
//           Yeah Baby!
//         </a>
//         <a>
//           <Icon name="user" />
//           Hell No!
//         </a>
//       </Card.Content>
//     </Card>
//   )
// }

  return (
    <Card.Group class="company-card-group">
      <Card class="namechange">
        <Card.Header>{name}</Card.Header>
        <Card.Content>{location}</Card.Content>
        <Card.Meta>{email}</Card.Meta>
        <Card.Description>{about}</Card.Description>
      <Card.Content className='ui two buttons'>
        <Icon name="play circle outline">
          Yeah Baby!
        </Icon>
        <Icon name="stop circle outline">
          Hell No!
        </Icon>
      </Card.Content>
      </Card>
    </Card.Group>
  )
}