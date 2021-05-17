import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpensesListItems=({id,description ,amount,createdAt,note})=>{   
    return (
        <div> 
            <Link to={`/edit/${ id }`}> <h3 className="expenses">   {description} </h3> </Link>
             <p> 
                  {numeral(amount/100).format("$0.0,00")} 
                  -- 
                  {moment(createdAt).format("MMMM Do, YYYY")} 
            </p>
             <hr/>
        </div>
    );
} 

export default ExpensesListItems;