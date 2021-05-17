import React from "react";
import ReactDOM from "react-dom"; 
import {Provider} from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configStore";
import 'react-dates/lib/css/_datepicker.css';  // the import belong to the src/componnet/ExpensesListFilters
import "normalize.css/normalize.css"
import "./styles/styles.scss";  

const store=configStore();  

console.log("testing");
const jsx=(
    <div>
        <Provider store={store}>
           <AppRouter />
        </Provider>
    </div>
) 
ReactDOM.render(jsx, document.getElementById("app")); 