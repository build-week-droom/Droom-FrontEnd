// Import dependencies
import React, { useState, useEffect } from 'react'
import { axiosAuth } from '../../../auth/axiosAuth'
import JobCard from './JobCard'
import { Card } from 'semantic-ui-react'

// Create Jobs component
export default function Jobs(props) {
  // Declare state for jobs object
  const [jobs, setJobs] = useState([])

  // Get job listings object
  useEffect(() => {
    axiosAuth()
      .get('https://jobdroom.herokuapp.com/api/jobs')
      // Set state
      .then(response => {
        setJobs(response.data)
      })
      .catch(error => {
        console.error('Server Error:', error)
      })
  }, [])

  console.log('jobs: ', jobs)

  // Map over job listings to create a JobCard for each listing
  return (
    <Card.Group className="jobs-list grid" itemsPerRow={5}>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </Card.Group>
  )
}
