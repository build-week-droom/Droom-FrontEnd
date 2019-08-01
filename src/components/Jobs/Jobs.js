// Import dependencies
import React, { useState, useEffect } from 'react'
import JobCard from './JobCard'
import { Card } from 'semantic-ui-react'
import { axiosAuth } from '../../auth/axiosAuth';

// Create Jobs component
export default function Jobs(props) {
  // Declare state for jobs object
  const [jobs, setJobs] = useState([])

  // Get jobs object
  useEffect(() => {
    axiosAuth()
      .get('https://jobdroom.herokuapp.com/api/jobs', {
        // headers: {
        //   Authorization:
        //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqYXNvbkBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ1MjUwNjMsImV4cCI6MTU2NDYxMTQ2M30.xXkYeD5omzvCiOVNTAE9uQA-eCudvgfVEpl4xR1hLSI'
        // }
      })
      // Set state
      .then(response => {
        setJobs(response.data)
      })
      .catch(error => {
        console.error('Server Error:', error)
      })
  }, [])

  console.log('jobs: ', jobs)

  // Map over jobs object to create a JobCard for each job listing
  return (
    <Card.Group className="jobs-list grid" itemsPerRow={5}>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </Card.Group>
  )
}
