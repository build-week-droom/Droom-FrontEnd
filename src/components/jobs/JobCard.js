import React from 'react'

export default function JobCard({ job }) {
  const { id, title, description, location, company, email } = job
  const [companyInfo, setCompanyInfo] = useState()

  useEffect(() => {
    axios
      .get('`https://jobdroom.herokuapp.com/api/company/${id}`')
      .then(response => {
        setstate(response.data.results)
      })
      .catch(error => {
        console.error('Server Error: ', error)
      })
  }, [])

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
          </div> */}
      ))}
    </div>
  )
}
