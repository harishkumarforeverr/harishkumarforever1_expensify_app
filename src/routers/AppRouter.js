import React from 'react'
import { Router, Route, Switch, Link , NavLink} from "react-router-dom";
import  {createBrowserHistory} from "history";
import expensifyDashBoard from "../components/expensifyDashBoard";
import addExpensesPage from "../components/addExpensesPage";
import editExpensesPage from "../components/editExpensesPage";
import helpPage from "../components/helpPage";
import pageNotFound from "../components/pageNotFound";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export const history=createBrowserHistory();

const AppRouter=()=>(
    <Router  history={history} >
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={expensifyDashBoard}  />
                <PrivateRoute path="/create" component={addExpensesPage} />
                <PrivateRoute path="/edit/:id" component={editExpensesPage}  /> 
                <Route component={pageNotFound} />
            </Switch>
        </div>
    </Router >
); 
export default AppRouter;