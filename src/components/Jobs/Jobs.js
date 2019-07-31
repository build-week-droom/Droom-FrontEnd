import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobCard from './JobCard'

export default function Jobs(props) {
  const [jobs, setJobs] = useState([])
  const [company, setCompany] = useState([])

  useEffect(() => {
    axios
      .get('https://jobdroom.herokuapp.com/api/jobs')
      .then(response => {
        setJobs(response.data)
      })
      .catch(error => {
        console.error('Server Error:', error)
      })
  }, [])

  console.log('jobs: ', jobs)

  useEffect(() => {
    axios
      .get('https://jobdroom.herokuapp.com/api/company')
      .then(response => {
        setCompany(response.data)
      })
      .catch(error => {
        console.error('Server Error:', error)
      })
  }, [])

  console.log('company profiles: ', company)

  return (
    <div className="jobs-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
