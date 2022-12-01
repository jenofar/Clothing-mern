import React from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom'
import userContext from '../context';
import {useContext} from "react"
import {useState, useEffect} from 'react'
import axios from 'axios';

function SucessfullModal() {
    const navigate = useNavigate()
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0)
    var head=useContext(userContext)

    const deletecart=(product_id)=>{
        console.log(product_id);
        axios.post('http://localhost:3002/api/cart/deletecart',{product_id:product_id},{headers:{
                    'Content-Type':'application/json',
                    'x-auth-token':head.auth
                  }}).then(res=>{
                    if(res.data.acknowledged) return getme()
                  })
    }

    const increaseqnty=(product_id,price,name,quantity)=>{
        console.log(product_id+price+name+quantity);
        axios.post('http://localhost:3002/api/cart/insertcart',{
            product_id:product_id,
            price:price,
            name:name,
            quantity:quantity+1
        },{headers:{
                    'Content-Type':'application/json',
                    'x-auth-token':head.auth
                  }}).then(res=>{console.log(res.data)
                getme()})
    }
    const decreaseqnty=(product_id,price,name,quantity)=>{
        console.log(product_id+price+name+quantity);
        if(quantity==1) return deletecart(product_id)
        else{
        axios.post('http://localhost:3002/api/cart/insertcart',{
            product_id:product_id,
            price:price,
            name:name,
            quantity:quantity-1
        },{headers:{
                    'Content-Type':'application/json',
                    'x-auth-token':head.auth
                  }}).then(res=>{console.log(res.data)
                getme()})
                  }
    }

    async function getme(){
                axios.get('http://localhost:3002/api/customer/getme',{headers:{
                    'Content-Type':'application/json',
                    'x-auth-token':head.auth
                  }}).then(res=>{
                    console.log(res.data);
                    setCart(res.data.cart[0].products)
                    setTotal(res.data.total)
                  })
            }
            useEffect(()=>{
                getme()
            },[])

  return (
    <>
        <div  className='GSucessFullModal' style={{height:'auto',top:'50px',paddingBottom:'20px'}}> 
            <div className='GContainerSucess'>
                <div className='GimageSucessfullImage'>
                    <img className='cart-image' src={"https://th.bing.com/th/id/OIP.6zSUQik1lCtY-qlmWh_CtgHaF6?pid=ImgDet&rs=1"}/>
                    <h1 className='h1-head'>Keep Shopping</h1>
                </div>
               
                <div className='cart-order'>
                    {cart.map(item=>(
                        <>
                         <h3>{item.name}</h3>
                    <div className='pr-div'>
                    <p className='price'>Price: {item.price} x {item.quantity} = {item.amount}</p>
                    <p className='quantity'>Quantity: {item.quantity} <button className='qua-btn' onClick={()=>(increaseqnty(item.product_id,item.price,item.name,item.quantity))}>+</button><button className='qua-btn' onClick={()=>(decreaseqnty(item.product_id,item.price,item.name,item.quantity))}>-</button><button className='btn-rem' onClick={()=>(deletecart(item.product_id))}><i class="fa fa-trash"></i></button></p>
                    
                    </div>
                        </>
                    ))}
                   
                    
                   
                </div>
                
                 
                    <div className='total'>
                        <p className='total-p'>Total:<span className='tot-span'>$ {total}</span></p>
                    </div>
              
            </div>
            <button className='checkout' type='submit' onClick={()=>{
              if(cart.length===0) return alert('Add a item')
              navigate('/payment')}
              }>Checkout</button>
            <button className='checkout' onClick={()=>(navigate('/product'))} >Go to Products</button>
        </div>
    </>
  )
}

export default SucessfullModal