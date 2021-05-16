import React from "react";
import ReactDOM from "react-dom"; 
import {Provider} from "react-redux";
// import moment from "moment";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpanses from "./selectors/expenses";
import 'react-dates/lib/css/_datepicker.css';  // the import belong to the src/componnet/ExpensesListFilters
import "normalize.css/normalize.css"
import "./styles/styles.scss";  

const store=configStore();

 store.dispatch(addExpense({
     description:"water bill",
     note:"",
     amount : 450,
     createdAt:2023
 }));

 
 store.dispatch(addExpense({
    description:"Gas bill",
    note:"",
    amount : 1000,
    createdAt:2021
}));

store.dispatch(addExpense({
   description:"rent",
   note:"",
   amount : 109500,
   createdAt:2022
}));
 

const state=store.getState();
const visibleExpenses=getVisibleExpanses(state.expenses, state.filters);

// console.log(visibleExpenses);

const jsx=(
    <div>
        <Provider store={store}>
           <AppRouter />
        </Provider>
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"));

// console.log(moment().startOf("month"));
// console.log(moment().endOf("month"));
