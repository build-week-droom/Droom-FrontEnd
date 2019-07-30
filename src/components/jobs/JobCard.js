import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function JobCard({ job }) {
  const { id, title, description, location, company, email } = job
  const [companyInfo, setCompanyInfo] = useState()

  useEffect(() => {
    axios
      .get(`https://jobdroom.herokuapp.com/api/company/${id}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiakBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ0MzcxNDMsImV4cCI6MTU2NDUyMzU0M30.L8-UysPiWEVqECJDI0jrps6IB8SC5ZoJAx4mRJherSE'
        }
      })
      .then(response => {
        setCompanyInfo(response.data)
      })
      .catch(error => {
        console.error('Server Error: ', error)
      })
  }, [id])

  console.log(companyInfo)

  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      {/* <div className=''>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className='movie-star'>
            {star}
          </div>
      ))} */}
    </div>
  )
}
