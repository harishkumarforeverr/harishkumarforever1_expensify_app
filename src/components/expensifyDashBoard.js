import React from "react";
import ExpensesList from "./expensesList";
import ExpenseListFilters from "./ExpensesListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpensifyDashBoard = () => (
    <div> 
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);
export default ExpensifyDashBoard;