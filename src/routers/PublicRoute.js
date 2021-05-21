import React from 'react';
import {connect} from "react-redux";  
import { Route,Redirect } from "react-router-dom"; 
import Header from "../components/Header";


export const PublicRoute =(
    {
         Authentication ,
         component:Component,
         ...rest
    }
    )=>{
    return (
        <div> 
            <Route {...rest} component={(props)=>{
                   return (
                       Authentication ? ( 
                        <div>        
                           <Header /> 
                           <Redirect to="/dashboard" />
                       </div> 
                       ) :( 
                        <Component />
                       )
                   )
            }} />
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        Authentication:state.auth.uid
    }
}

export default connect(mapStateToProps)(PublicRoute);