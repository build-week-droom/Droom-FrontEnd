import React,{useState} from 'react'
import { Form, Field, Formik, yupToFormErrors, withFormik } from "formik";
import * as Yup from "yup";
import useLocalStorage from '../../auth/useLocalStorage'
import { axiosAuth } from '../../auth/axiosAuth';


// // Object Schema Validator
// const LoginSchema = Yup.object().shape({
//   email: Yup.string(),
//   password: Yup.string()
// });

const LoginForm = ({props, values, errors, touched, isSubmitting}) => {
  // hook that holds the initial state(initLogin)
  // useState sets initLogin to an object which is email and password and they are empty strings

  const [initLogin, setLogin] = useState({
    email: '',
    password: ''
  })

  // const [storedToken, setToken] = useLocalStorage('token')
  return (
    <div>

      <div>
        <label>
        {touched.email && errors.email && <p>{errors.email}</p>}
          <Field 
            type='email' 
            name='email'
            placeholder='enter email'
            /> 
        </label>
      </div>

      <div>
        <label>
        {touched.password && errors.password && <p>{errors.password}</p>}
          <Field 
            type='password' 
            name='password'
            placeholder='enter password'
            /> 
        </label>
      </div>
    <button className='ui primary labeled icon button' disabled={isSubmitting} type='submit'>
    <i className="unlock alternate icon"></i>
      Register
    </button>
    </div>
  )
}


const LoginFormFormik = withFormik({
  mapPropsToValues({ email, password}) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
    .email('email is not valid')
    .required('email required'),
    
    password: Yup.string()
    .required('password required')
  }),
  handleSubmit(values, { props, resetForm,setErrors,setSubmitting}) {
    console.log('hello')
    
    axiosAuth()
      .post('/api/auth/login', values)
        .then(res => {
          console.log(res)
            props.setToken(res.data.token)
            resetForm()
            setSubmitting(false)
        })
        .catch(err => {
          console.log(err => {
            console.log(err)
          })
        })
  }
})(LoginForm)

export default LoginFormFormik