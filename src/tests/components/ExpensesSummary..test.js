import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary"; 

test("should render the expenses corrent total correctly with single expenses ",()=>{
    const wrapper=shallow(<ExpensesSummary count={1} totalExpenses={1003} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render the expenses corrent total correctly with multiple expenses ",()=>{
     const wrapper=shallow(<ExpensesSummary count={8} totalExpenses={98237} />);
     expect(wrapper).toMatchSnapshot();
});