import React from 'react';
import {connect} from "react-redux";  
import { Route,Redirect } from "react-router-dom";
import Header from "../components/Header";


export const PrivateRoute =(
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
                       Authentication ?( 
                        <div>  
                        <Header /> 
                        <Component {...props} />
                       </div> 
                       ) :(
                           <Redirect to="/" />
                       )
                   )
            }} />
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        // Authentication:state.auth.uid //online mode
        Authentication:true //offline mode
    }
}

export default connect(mapStateToProps)(PrivateRoute);