import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobCard from './JobCard'

export default function JobsList(props) {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios
      .get('https://jobdroom.herokuapp.com/api/jobs', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiakBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ0MzcxNDMsImV4cCI6MTU2NDUyMzU0M30.L8-UysPiWEVqECJDI0jrps6IB8SC5ZoJAx4mRJherSE'
        }
      })
      .then(response => {
        setJobs(response.data)
      })
      .catch(error => {
        console.error('Server Error:', error)
      })
  }, [])

  console.log(jobs)
  return (
    <div className="jobs-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
