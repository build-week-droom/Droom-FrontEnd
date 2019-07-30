import React,{useState} from 'react'
import { Form, Field, Formik, yupToFormErrors, withFormik } from "formik";
import * as Yup from "yup";
import {useLocalStorage} from '../../auth/useLocalStorage'
import { axiosAuth } from '../../auth/axiosAuth';
import { axiosInstance } from '../../auth/helpers';


function LoginForm({ props, values, errors, touched, isSubmitting}) {
  // console.log('values:', values)

  const setValue = useLocalStorage("token")
  
  return (

  <div className="ui centered grid container">
    <Form className="page-login ">
     <div className="ui icon warning message">
      <div className="nine wide column">

      <div >
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field  className="field" type="text" name="email" placeholder="email" />
      </div>

      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field  className="field" type="password" name="password" placeholder="Password" />
      </div>

      <div>

      <button className="ui primary labeled icon button" style={{textAlign:'center'}}disabled={isSubmitting} type='submit'> <i className="unlock alternate icon"></i>
                Loginr</button>
      </div>
        
      </div>
     </div>
    </Form>
  </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password}) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
    .required('Name is required.'),
    password: Yup.string()
     .required('Password is required'),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log(values)
    console.log('object')
      axiosAuth()
        .post('/api/auth/login', values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console

          props.setValue(res.data.token)
          console.log(res.data.token)
          props.history.push('/profile')
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
  }
})(LoginForm);

export default FormikLoginForm;