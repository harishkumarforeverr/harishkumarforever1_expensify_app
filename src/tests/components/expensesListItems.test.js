import React from "react";
import {shallow} from "enzyme";
import ExpensesListItems from "../../components/expensesListItems";
import expenses from "../fixtures/expenses";
 
test("test/componnets/expensesListItems  should render expensesListItems correctly",()=>{  
        const wrapper=shallow(<ExpensesListItems {...expenses[1]}/>);
        expect(wrapper).toMatchSnapshot();
});