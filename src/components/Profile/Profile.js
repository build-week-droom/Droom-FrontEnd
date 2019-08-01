import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProfilePage from './ProfilePage'

export const Profile = (props) => {
  const [profile, setProfile] = useState()
  const id = props.match.params.id
  console.log(id)
  useEffect(() => {
    axios
      .get(`https://jobdroom.herokuapp.com/api/seekers/${id}`)
      .then(response => {
        setProfile(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div >
      Prfile Page
    </div>
  )
}