import React from "react";
import ExpensesList from "./expensesList";
import ExpenseListFilters from "./ExpensesListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpensifyDashBoard = () => (
    <div className="marginComponent"> 
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);
export default ExpensifyDashBoard;