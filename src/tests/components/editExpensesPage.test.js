import React from 'react';
import {shallow} from "enzyme";
import {EditExpensesPage} from "../../components/editExpensesPage";
import expenses from "../fixtures/expenses"
let startRemoveExpense,startEditExpense,history,wrapper;
beforeEach(()=>{ 
  startRemoveExpense=jest.fn();   
  startEditExpense=jest.fn(); 
  history={
    push:jest.fn()
  };
  wrapper=shallow(
            <EditExpensesPage
              startRemoveExpense={startRemoveExpense} 
              startEditExpense={startEditExpense}
               history={history}  
               expense={expenses[2]}
              / >
             )
});

test("src/test/components/EditExpensesPage ::::::::: toMatchSnapshot ",()=>{
    expect(wrapper).toMatchSnapshot(); 
});

test("src/test/components/EditExpensesPage ::::::::: startEditExpense ",()=>{
   wrapper.find("ExpanseForm").prop("onSubmit")(expenses[2]);
   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
   expect(history.push).toHaveBeenLastCalledWith("/");
});
 
 
test("src/test/components/EditExpensesPage :::::::: startRemoveExpense ",()=>{
   wrapper.find("button").prop("onClick")();
   expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
   expect(history.push).toHaveBeenLastCalledWith("/");
});
 