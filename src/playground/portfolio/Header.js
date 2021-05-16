import React from 'react';
import {NavLink} from "react-router-dom";
const Header=()=>{
    return (
        <div>
            <h1>Portfolio</h1>
            <NavLink   exact={true}  activeClassName="is-active"  to="/" > Home </NavLink>
            <NavLink   exact={true}  activeClassName="is-active"  to="/portfolio"> Portfolio </NavLink>
            <NavLink   activeClassName="is-active"  to="contact" > contact </NavLink> 
        </div>
    );
}
export default Header;