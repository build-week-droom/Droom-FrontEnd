import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobCard from './JobCard'

export default function Jobs(props) {
  const [jobs, setJobs] = useState([])
  const [company, setCompany] = useState([])

  useEffect(() => {
    axios
      .get('https://jobdroom.herokuapp.com/api/jobs', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqYXNvbkBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ1MjUwNjMsImV4cCI6MTU2NDYxMTQ2M30.xXkYeD5omzvCiOVNTAE9uQA-eCudvgfVEpl4xR1hLSI'
        }
      })
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
      .get('https://jobdroom.herokuapp.com/api/company', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqYXNvbkBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ1MjUwNjMsImV4cCI6MTU2NDYxMTQ2M30.xXkYeD5omzvCiOVNTAE9uQA-eCudvgfVEpl4xR1hLSI'
        }
      })
      .then(response => {
        setCompany(response.data)
      })
      .catch(error => {
        console.error('Server Error:', error)
      })
  }, [])

  console.log('company profiles: ', company)

  return (
    <div className="jobs-list grid">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
