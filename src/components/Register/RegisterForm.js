import React,{useState} from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import {axiosAuth} from '../../../auth/axiosAuth'


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

const RegisterForm = (props,{ errors, touched, isSubmitting}) => {
  // hook that holds the initial state(initLogin)
  // useState sets initLogin to an object which is email and password and they are empty strings

  const [initRegister, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    isCompany: 'false'
  })
  
  return (
    <div className="ui centered grid container">
    <Form className="page-login ">
     <div className="ui icon warning message">
      <div className="nine wide column">

      <div >
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field  className="field" type="text" name="name" placeholder="name" />
      </div>

      <div >
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field  className="field" type="text" name="email" placeholder="email" />
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field  className="field" type="password" name="password" placeholder="Password" />
      </div>

      <div >
      <label>
      {touched.isCompany && errors.isCompany && <p>{errors.isCompany}</p>}
      <Field type="radio" name="isCompany" />
        Seeker
      </label>
      <label>
      {touched.isCompany && errors.isCompany && <p>{errors.isCompany}</p>}
      <Field type="radio" name="isCompany" checked={!values.isCompany} />
        company
      </label>
      </div>
      <div>

      <button className="ui primary labeled icon button" disabled={isSubmitting} type='submit'> <i className="unlock alternate icon"></i>
                Register</button>
      </div>
        
      </div>
     </div>
    </Form>
  </div>
  )
}
const FormikRegisterForm = withFormik({
  mapPropsToValues({name, email, password, isCompany}) {
    return {
      name: name,
      email: email,
      password: password,
      isCompany: isCompany
    }
  },
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log(values)
    console.log('object')
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axiosAuth()
        .post("/api/auth/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          props.setToken(res.data.token)
          props.history.push('/profile')
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
      }
    }
})(RegisterForm)

export default FormikRegisterForm