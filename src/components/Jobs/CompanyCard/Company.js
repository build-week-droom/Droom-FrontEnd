import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CompanyCard from './CompanyCard'

export default function Company(props) {
  const [company, setCompany] = useState()
  const id = props.match.params.id
  console.log(id)
  useEffect(() => {
    axios
      .get(`https://jobdroom.herokuapp.com/api/company/${id}`)
      .then(response => {
        setCompany(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div className="company-wrapper">
      <CompanyCard company={company} />
    </div>
  )
}
