import React from 'react'
import { BrowserRouter, Route, Switch, Link , NavLink} from "react-router-dom";
import expensifyDashBoard from "../components/expensifyDashBoard";
import addExpensesPage from "../components/addExpensesPage";
import editExpensesPage from "../components/editExpensesPage";
import helpPage from "../components/helpPage";
import pageNotFound from "../components/pageNotFound";
import Header from "../components/Header";
const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={expensifyDashBoard} exact={true} />
                <Route path="/create" component={addExpensesPage} />
                <Route path="/edit/:id" component={editExpensesPage}  />
                <Route path="/help" component={helpPage} />
                <Route component={pageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
); 
export default AppRouter;