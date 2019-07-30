import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addSeeker, addCompany } from '../../store/actions/actions';

const Register = (props) => {
  const [initRegister, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    isCompany: false
  })

  const handleChanges = (e) => {
    setRegister({...initRegister, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSeeker(initRegister)
    console.log(initRegister)
  }



  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder='Enter Name'
          value={props.name}
          onChange={handleChanges}
        />
        <input 
          type='text'
          name='email'
          placeholder='Enter Email'
          value={props.email}
          onChange={handleChanges}
        />
        <input 
          type='text'
          name='password'
          placeholder='Emter Password'
          value={props.password}
          onChange={handleChanges}
        />
        <div className='ui toggle checkbox'>
          <label>
            <input 
              type='radio'
              name='isCompany'
              checked={!props.isCompany}
              />
              Seeker
          </label>
          </div>
          <div className='ui toggle checkbox'>
            <label>
            
              <input 
                type='radio'
                name='isCompany'
                checked={props.isCompany}
                />
                Company
            </label>
          </div>
          <button className="ui submit button" onClick={handleSubmit}>
            Register
          </button>
      </form>
    </div>
  )
}


export default connect(null, {addSeeker, addCompany})(Register)