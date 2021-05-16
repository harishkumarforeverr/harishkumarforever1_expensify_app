import React from 'react';
import {Link} from "react-router-dom"

const ExpensesListItems=({id,description ,amount,createdAt,note})=>{   
    return (
        <div> 
            <Link to={`/edit/${ id }`}> <h3 className="expenses">   {description} </h3> </Link>
             <p>  {amount} -- {createdAt} </p>
             <hr/>
        </div>
    );
}


export default ExpensesListItems;