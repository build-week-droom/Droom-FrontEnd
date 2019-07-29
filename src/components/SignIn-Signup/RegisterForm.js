import React,{useState} from 'react'
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";


// Object Schema Validator
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Enter your full name'),

  email: Yup.string()
    .required('Email required') ,

  password: Yup.string()
    .min(6, 'Your password must be 6 characters')
    .required('Password Required'),

  IsCompany: Yup.boolean()
    .oneOf([true, false], "Select if you're either a company or a user")
});

const Register = () => {
  // hook that holds the initial state(initLogin)
  // useState sets initLogin to an object which is email and password and they are empty strings

  const [initRegister, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    isCompany: 'false'
  })
  
  return (
    <div>
      Hello, Login!
    </div>
  )
}

export default Register