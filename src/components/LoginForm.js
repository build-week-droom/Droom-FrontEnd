import React,{useState} from 'react'
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";


// Object Schema Validator
const LoginSchema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string()
});

const LoginForm = () => {
  // hook that holds the initial state(initLogin)
  // useState sets initLogin to an object which is email and password and they are empty strings

  const [initLogin, setLogin] = useState({
    email: '',
    password: ''
  })
  
  return (
    <div>
      Hello, Login!
    </div>
  )
}

export default LoginForm