import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import PageNotFound from "./PageNotFound";
import MyWorkPortfolio from "./MyWorkPortfolio";
import Header from "./Header"

const MainRouter = () => (
    <BrowserRouter> 
     <div>
          <Header />
        <Switch> 
            <Route path="/" component={HomePage} exact={true} />        
            <Route path="/portfolio" component={PortfolioPage} exact={true} />
            <Route path="/portfolio/:id" component={MyWorkPortfolio} /> 
            <Route path="/contact" component={ContactPage} />  
            <Route  component={PageNotFound} /> 
        </Switch>
    </div>
    </BrowserRouter>
);

export default MainRouter;