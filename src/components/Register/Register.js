import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addSeeker, addCompany } from '../../store/actions/actions';

const Register = (props) => {
  const [initRegister, setInitRegister] = useState({
    name: '',
    email: '',
    password: '',
    isCompany: false
  })

  const handleChanges = (e) => {
    setInitRegister({...initRegister, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSeeker(initRegister)
    console.log(initRegister)

    setInitRegister({ 
    name: '',
    email: '',
    password: '',
    isCompany: false})
    console.log("Register CLG:", initRegister)
  }

  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder='Enter Name'
          value={initRegister.name}
          onChange={handleChanges}
        />
        <input 
          type='text'
          name='email'
          placeholder='Enter Email'
          value={initRegister.email}
          onChange={handleChanges}
        />
        <input 
          type='text'
          name='password'
          placeholder='Emter Password'
          value={initRegister.password}
          onChange={handleChanges}
        />
        <div className='ui toggle checkbox'>
          <label>
            <input 
              type='radio'
              name='isCompany'
              checked={!initRegister.isCompany}
              onChange={handleChanges}
              />
              Seeker
          </label>
          </div>
          <div className='ui toggle checkbox'>
            <label>
            
              <input 
                type='radio'
                name='isCompany'
                checked={initRegister.isCompany}
                onChange={handleChanges}
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