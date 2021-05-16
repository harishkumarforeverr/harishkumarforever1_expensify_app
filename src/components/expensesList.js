import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItems from "./expensesListItems"
import selectedExpenses from "../selectors/expenses";
export const ExpensesList=(props)=>(
  <div>          
        {
            props.expenses.length===0?(
                <h4>Zero exoenses  </h4>
            ):( 
               props.expenses.map((expense)=>{
                  return (<ExpensesListItems key={expense.id} {...expense}  />);
               })
            )
        }

  </div>
);

const mapStateToProps= (state)=>{
    return ({
    expenses:selectedExpenses(state.expenses,state.filters)        
    })
}
 export default connect(mapStateToProps)(ExpensesList);
