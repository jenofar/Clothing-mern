import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../components/LogSignup.css";
import {useFormik} from 'formik'
import axios from 'axios';
import userContext from '../context';
import {useContext} from "react"

export default function Login() {
  const navigate = useNavigate();
  var head=useContext(userContext)

  async function postlogin(){
    axios.post('http://localhost:3002/api/customer/login',{
        email:formik.values.email,
        pwd:formik.values.password
    }).then(res=>{
        // token=Object.entries(res.data)
        console.log(res.data);
        // console.log(res.headers.Autherization);
        if(res.data==='No user on that email') return(alert('No user on that name'))
        if(res.data==='Please enter correct id and password') return(alert('Please enter correct id and password'))
        head.auth=res.data   
        
        navigate('/welcome')
        // if(head.auth)getme()
      })
}    

  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      
    },
    onSubmit:(values)=>{
      console.log(values);
      postlogin();
      
    },
    validate:(values)=>{
      let errors = {};
        if (!values.email) {
        errors.email = 'Required';
        } 
        if(!values.password) errors.password="Required";
        return errors;
    }
  })
  return (
    <div className="outer">
      <div className="inner">
        <form onSubmit={formik.handleSubmit}>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input id="email_lower" name="email"  type="email" className="form-control" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email}  />
                    {formik.errors.email ? <div style={{ color: "red" }} >{formik.errors.email}</div> : 
        null}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input id="password" placeholder='enter password' className="form-control" name="password" type="password"
        onChange={formik.handleChange} value={formik.values.password} /><br></br>
        {formik.errors.password ? <div style={{ color: "red" }} 
        >{formik.errors.password}</div> : null}
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
          >
            Sign in
          </button>
        
          <button
            onClick={() => {
              navigate("/sign-up");
            }}
            className="reg"
            type="submit"
          >
            Sign Up
          </button>
         
        </form>
      </div>
    </div>
  );
}
