import React from 'react'
import debit from "../image/PNGPIX-COM-Credit-Card-Vector-PNG-Transparent-Image.png"
import './payment.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import userContext from '../context';
import {useContext,useState,useEffect} from "react"

function Payment() {
    const navigate = useNavigate()
    const [total,setTotal]=useState()
    var head=useContext(userContext)
    const clearcart=()=>{
        axios.delete('http://localhost:3002/api/cart/clearcart',{headers:{
            'Content-Type':'application/json',
            'x-auth-token':head.auth
          }}).then(res=>{
            if(res.data.acknowledged) navigate('/success')
    })
    }
    async function getme(){
      axios.get('http://localhost:3002/api/customer/getme',{headers:{
          'Content-Type':'application/json',
          'x-auth-token':head.auth
        }}).then(res=>{
          console.log(res.data);
          // setCart(res.data.cart[0].products)
          setTotal(res.data.total)
        })
  }
  useEffect(()=>{
      getme()
  },[])
  return (
    <>
        <div  className='GSucessFullModal' > 
            <div className='GContainerSucess'>
                <div className='GimageSucessfullImage'>
                <h3>confirm your order</h3>
                <img className='debit-card' src={debit} alt='ngng'></img>
                </div>
                <h3 className='pay-tot'>Total: <span className='dollar'>$ {total}</span></h3>
              
            </div>
            <label className='pay-label'>Enter Your 16 Digit Number</label>
            <div className='pay'>
                <input  pattern="[0-9]{4}" maxlength="19" className='pay-inp' placeholder="xxxx xxxx xxxx xxxx"></input>
            </div>
            <button className='pay-btn' onClick={()=>(clearcart())}>Pay</button>
            <button className='pay-btn' onClick={()=>(navigate('/cart'))}>Back</button>
        </div>
    </>
  )
}

export default Payment