import React from "react";
import ExpensesList from "./expensesList";
import ExpenseListFilters from "./ExpensesListFilters";
const ExpensifyDashBoard = () => (
    <div> 
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);
export default ExpensifyDashBoard;