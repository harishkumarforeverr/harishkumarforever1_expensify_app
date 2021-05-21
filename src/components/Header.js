import React from 'react';
import {Link} from "react-router-dom";
import {startLogOut} from "../actions/auth";
import {connect} from "react-redux";

export const Header = (props) => (
    <header className="header">
        <div className="content-container">
                <div className="header__content">
                <Link className="header_title"  to="/dashboard" >
                            <h1>Mana Budget-App </h1>
                    </Link>      
                    <button className="button button--link" onClick={props.startLogOut}>logout</button>
                </div> 
        </div>
    </header>
);

const mapStateToProp=(dispatch)=>{
    return { startLogOut:  ()=>{
                                    dispatch(startLogOut())     
                                }         
           }
}

export default connect(undefined, mapStateToProp)(Header);