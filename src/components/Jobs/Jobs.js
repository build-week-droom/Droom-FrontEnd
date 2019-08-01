// Import dependencies
import React, { useState, useEffect } from 'react'
// import { axiosAuth } from '../../auth/axiosAuth'
import axios from 'axios'
import JobCard from './JobCard'
import { Card } from 'semantic-ui-react'

// Create Jobs component
export default function Jobs(props) {
  // Declare state for jobs object
  const [jobs, setJobs] = useState([])

  // Get jobs object

  // useEffect(() => {
  //   axiosAuth()
  //     .get('https://jobdroom.herokuapp.com/api/jobs')
  //     // Set state
  //     .then(response => {
  //       setJobs(response.data)
  //     })
  //     .catch(error => {
  //       console.error('Server Error:', error)
  //     })
  // }, [])

  useEffect(() => {
    axios
      .get('https://jobdroom.herokuapp.com/api/jobs', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqYXNvbkBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ2NzU0NTYsImV4cCI6MTU2NTI4MDI1Nn0.JOcgypi603rSWHIaNpbTeQGtv9BUX4UJGeLuiuTEnng'
        }
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
