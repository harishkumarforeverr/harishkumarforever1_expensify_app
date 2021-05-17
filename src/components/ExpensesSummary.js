import React from "react";
import {connect} from "react-redux";
import ExpensesTotal from "../selectors/Expenses-total";
import visibleExpenses from "../selectors/expenses";

export const ExpensesSummary=(props)=>{ 
    const expense=props.count===1?"expense":"expenses";
   return (
       <div> 
            <h3>viewing {props.count} {expense} totalling {props.totalExpenses} </h3>  
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