import React from "react";
import {shallow} from "enzyme";
import {AddExpensesPage} from "../../components/addExpensesPage";
import expenses from "../fixtures/expenses"

let addExpense,history,wrapper;
beforeEach(()=>{ 
     addExpense=jest.fn();
     history={
        push:jest.fn()
    }
     wrapper=shallow(<AddExpensesPage addExpense={addExpense} history={history} />);
})
//default one
test("test/component/addExpensesPage  :::::::  testing addExpensesPage component",()=>{  
    expect(wrapper).toMatchSnapshot();
});

// now testing the spy (jest.fn())
test("test/component/addExpensesPage  :::::::  testing addExpensesPage component",()=>{   
   wrapper.find("ExpanseForm").prop("onSubmit")(expenses[1])
   expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith("/");
});