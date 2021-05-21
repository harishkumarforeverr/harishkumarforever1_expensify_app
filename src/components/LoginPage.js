import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";

export const LoginPage=(props)=>{
    return (
        <div className="box-layout">  
              <div className="box-layout__box">
                  <h1 className="box-layout__title" >Mana Budget-App</h1>
                  <p>its time to get your expenses under control </p>
                <button className="button" onClick={props.startLogin}>Login with Google</button> 
            </div>
        </div>
    )
}

const mapDispatchToState=(dispatch)=>{
    return {
        startLogin:()=>{dispatch(startLogin())}
    }
}

export default connect(undefined,mapDispatchToState)(LoginPage);