import React,{useState} from 'react'
import { Form, Field, Formik, yupToFormErrors, withFormik } from "formik";
import * as Yup from "yup";
import {useLocalStorage} from '../../auth/useLocalStorage'
import { axiosAuth } from '../../auth/axiosAuth';
import { axiosInstance } from '../../auth/helpers';
import {decodeToken} from '../../auth/Token';
import { connect } from 'react-redux'
import { userCheck } from '../../store/actions/actions'

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
    console.log('loginform values clg: ' ,values)
      axiosAuth()
        .post('/api/auth/login', values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          
          console.log(props.setValue)
          props.setValue(res.data.token)
          // localStorage.getItem('isCompany', props.isCompany)c
          console.log('clg res.data in login form', res.data)
          console.log(res.data.token)
          // console.log('decodedToken: ', decodeToken())
          const {isCompany} = decodeToken() 
          console.log('clg isCompany LoginForm: ', isCompany)
          if (isCompany === false){
            console.log('CLG propsIC in LOGINFORM', props)
            
              props.history.push('/profile')
          } else {
              props.history.push('/CompanyProfile')
          }
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
  }
})(LoginForm);

export default connect(null,{userCheck})(FormikLoginForm);