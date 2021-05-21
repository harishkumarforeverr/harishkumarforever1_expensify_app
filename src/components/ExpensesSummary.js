import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ExpensesTotal from "../selectors/Expenses-total";
import visibleExpenses from "../selectors/expenses";


export const ExpensesSummary=(props)=>{ 
    const expense=props.count===1?"expense":"expenses";
   return (
       <div className="page-header"> 
         <div className="content-container">
             <div  className="page-header__title"> 
                <h1> Viewing <span>{props.count}</span> {expense} totalling <span>{props.totalExpenses}</span> </h1>  
             </div>     
             <div  className="page-header__action"> 
                <Link  className="button" to="/create"> Add Expense(Item) </Link>
             </div>
         </div>
       </div>
   )   
}

const mapStateToProps=(state)=>{
    const MyvisibleExpenses=visibleExpenses(state.expenses,state.filters);
    return {
          totalExpenses:ExpensesTotal(MyvisibleExpenses),
          count:MyvisibleExpenses.length
    }
}
export default connect(mapStateToProps)(ExpensesSummary);