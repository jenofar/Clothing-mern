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
                <div className='err'>
                    {/* <img src={tick}/> */}
                    <h1>404</h1>
                </div>
                <div >
                    <h4 className='con-h1'>Access Denied</h4>
                </div>
                <div>
                    <p className='con-p'>Only authenticated persons are allowed</p>
                </div>
                <div>
                    <button onClick={()=>navaigate('/')} className='con-btn'>Login</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Confirm