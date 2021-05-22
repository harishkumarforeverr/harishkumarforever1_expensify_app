import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItems from "./expensesListItems"
import selectedExpenses from "../selectors/expenses";
export const ExpensesList=(props)=>(
  <div className="content-container">          
        <div className="list-header"> 
                    <div className="breakpoint-for-mobile">
                        Expeneses
                    </div>
                    <div className="breakpoint-for-desktop">
                        Expenese
                    </div>
                    <div className="breakpoint-for-desktop">
                        Amount
                    </div>
        </div>

        {
            props.expenses.length===0?(
                <div> 
                    <div className="list-item__noExpenses"> 
                            <h4>Zero exoenses  </h4>
                            <h5>start adding a new expenses to your Mana budget-App </h5>
                    </div> 
                </div>
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
