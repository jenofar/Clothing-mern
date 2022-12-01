import React, { Component } from "react";
import "../components/LogSignup.css";
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

  const navigate = useNavigate()
  async function postreg(){
    axios.post('http://localhost:3002/api/customer/register',{
        fname:formik.values.firstname,
        lname:formik.values.lastname,
        email:formik.values.email,
        password:formik.values.password,
    }).then(res=>{
        if(res.data==="Email is already used") return alert("Email is already used")
        alert(res.data)
        navigate('/')
    })
}

  const formik=useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      
    },
    onSubmit:(values)=>{
      console.log(values);
      postreg()
    },
    validate:(values)=>{
      let errors = {};
        if (!values.firstname) {
        errors.firstname = 'Required';
        } 
        if (!values.lastname) {
            errors.lastname = 'Required';
            } 
            if (!values.email) {
                errors.email = 'Required';
                } 
        if(!values.password) errors.password="Required";
        return errors;
    }
  })
  return (
    <>
      <div className="outer">
        <div className="inner">
          <form onSubmit={formik.handleSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>First name</label>
              <input id="firstname" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input  id="email_lower" name="email" onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input  id="password" name="password" onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">log in?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
