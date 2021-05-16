import React from 'react';
import {Link } from "react-router-dom";
const Portfolio =()=>(
    <div> 
      <h1>Portfolio </h1>
      <h4>check out what i have did in my life below </h4>
      <Link to="/portfolio/1"> one Thing </Link>
      <Link to ="/portfolio/2"> two thing </Link>
    </div>
)
export default Portfolio;