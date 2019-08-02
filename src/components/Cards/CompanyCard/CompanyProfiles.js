import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../../../auth/axiosAuth'
import CompanyCard from './CompanyCard'

// GET /api/company/id Returns a Company Profile (id + jobs available).
// We have an id #, name, email, about, location, profileImg available for rendering

export default function CompanyProfiles(props) {
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    //.get axios get request here
    axiosAuth()
      .get(`https://jobdroom.herokuapp.com/api/company/`)
      .then(results => {
        setCompanies(results.data)
      })
      .catch(error => {
        console.log('Check your work', error)
      })
  }, [])

  console.log('Companies Available: ', companies)

  // console.log('More information on our companies ', companies)

  return (
    <div className="company-list">
      {companies.map(company => (
        <CompanyCard key={company.name} company={company} />
      ))}
    </div>
  )
}
