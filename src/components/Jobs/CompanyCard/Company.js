import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CompanyCard from './CompanyCard'

export default function Company(props) {
  const [company, setCompany] = useState([])
  const id = props.match.params.id
  console.log('Company id: ', id)
  useEffect(() => {
    axios
      .get(`https://jobdroom.herokuapp.com/api/company/${id}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqYXNvbkBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ2NzU0NTYsImV4cCI6MTU2NTI4MDI1Nn0.JOcgypi603rSWHIaNpbTeQGtv9BUX4UJGeLuiuTEnng'
        }
      })

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
