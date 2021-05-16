import React from 'react';
import {NavLink} from "react-router-dom";
const Header = () => (
    <header>
        <h1>Epensify-App </h1> 
        <NavLink  activeClassName="is-active"  to="/" exact={true}>DashBoard</NavLink>
        <NavLink  activeClassName="is-active"  to="/create">CreateExpense</NavLink>     
    </header>
);
export default Header;