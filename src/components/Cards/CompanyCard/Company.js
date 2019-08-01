import React, { useState, useEffect } from 'react'
import CompanyCard from './CompanyCard'
import { Card } from 'semantic-ui-react'
import { axiosAuth } from '../../../auth/axiosAuth';

export default function Company(props) {
  const [company, setCompany] = useState([])
  const id = props.match.params.id
  console.log('Company id: ', id)
  useEffect(() => {
    axiosAuth()
      .get(`https://jobdroom.herokuapp.com/api/company/${id}`)

      .then(response => {
        console.log('server response', response)
        setCompany(response.data)
      })
      .catch(error => {
        console.log('SERVER ERROR!!', error)
      })
  }, [id])

  console.log('company state: ', company)
  return (
    <Card.Group className="company-list grid" itemsPerRow={2}>
      <CompanyCard company={company} />
    </Card.Group>
  )
}
