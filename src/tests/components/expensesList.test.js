import React from 'react';
import {shallow} from "enzyme";
import { ExpensesList } from "../../components/expensesList";
import expenses from "../fixtures/expenses";

test("test/components/expensesList should render expensesList correctly ",()=>{
     const wrapper=shallow(<ExpensesList expenses={expenses} />);
     expect(wrapper).toMatchSnapshot();
});


test("test/components/expensesList should render expensesList correctly ",()=>{
    const wrapper=shallow(<ExpensesList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});