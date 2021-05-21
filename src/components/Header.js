import React from 'react';
import {NavLink} from "react-router-dom";
import {startLogOut} from "../actions/auth";
import {connect} from "react-redux";

export const Header = (props) => (
    <header>
        <h1>Epensify-App </h1> 
        <NavLink  activeClassName="is-active"  to="/dashboard" >DashBoard</NavLink>
        <NavLink  activeClassName="is-active"  to="/create">CreateExpense</NavLink>     
        <button onClick={props.startLogOut}>logOut</button>
    </header>
);

const mapStateToProp=(dispatch)=>{
    return { startLogOut:  ()=>{
                                    dispatch(startLogOut())     
                                }         
           }
}

export default connect(undefined, mapStateToProp)(Header);