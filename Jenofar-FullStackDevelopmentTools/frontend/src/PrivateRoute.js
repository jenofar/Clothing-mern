import React from 'react'
// import { useNavigate } from 'react-router-dom'
import userContext from './context';
import {useContext} from "react"
// import Login from './components/login';
import Accessdenied from './components/Accessdenied'

const PrivateRoute = ({children}) => {
    var head=useContext(userContext)
    // const navigate=useNavigate()
    if(head.auth==null) {
        return <Accessdenied />
    }
    return children
}

export default PrivateRoute;