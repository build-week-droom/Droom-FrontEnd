import React, { useState, useEffect } from 'react'
import CompanyCard from './CompanyCard'
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
    <div className="company-wrapper">
      <CompanyCard company={company} />
    </div>
  )
}
