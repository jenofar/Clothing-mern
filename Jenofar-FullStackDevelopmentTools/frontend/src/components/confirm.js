import React from 'react'
import tick from '../image/tickimage.svg'
import './confirm.css'
import { useNavigate } from 'react-router-dom'


function Confirm() {
    const navaigate = useNavigate()
  return (
    <>
        <div  className='GSucessFullModal' > 
            <div className='GContainerSucess'>
                <div className='img-bg'>
                    <img src={tick}/>
                </div>
                <div >
                    <h4 className='con-h1'>Your order is successfull.</h4>
                </div>
                <div>
                    <p className='con-p'>Thank you for the order</p>
                </div>
                <div>
                    <button onClick={()=>navaigate('/product')} className='con-btn'>Continue Shopping</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Confirm