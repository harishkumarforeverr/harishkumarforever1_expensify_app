import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";

export const LoginPage=(props)=>{
    return (
        <div>
            <button onClick={props.startLogin}>Login</button>
        </div>
    )
}

const mapDispatchToState=(dispatch)=>{
    return {
        startLogin:()=>{dispatch(startLogin())}
    }
}

export default connect(undefined,mapDispatchToState)(LoginPage);