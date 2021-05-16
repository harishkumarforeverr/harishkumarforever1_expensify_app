import React from 'react';
import {shallow} from "enzyme";
import {EditExpensesPage} from "../../components/editExpensesPage";
import expenses from "../fixtures/expenses"
let removeExpense,editExpanse,history,wrapper;
beforeEach(()=>{ 
  removeExpense=jest.fn();
  editExpanse=jest.fn(); 
  history={
    push:jest.fn()
  };
  wrapper=shallow(
            <EditExpensesPage
              removeExpense={removeExpense} 
              editExpanse={editExpanse}
               history={history}  
               expense={expenses[2]}
              / >
             )
});

test("src/test/components/EditExpensesPage ::::::::: toMatchSnapshot ",()=>{
    expect(wrapper).toMatchSnapshot(); 
});

test("src/test/components/EditExpensesPage ::::::::: editExpanse ",()=>{
   wrapper.find("ExpanseForm").prop("onSubmit")(expenses[2]);
   expect(editExpanse).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
   expect(history.push).toHaveBeenLastCalledWith("/");
});
 
 
test("src/test/components/EditExpensesPage :::::::: removeExpense ",()=>{
   wrapper.find("button").prop("onClick")();
   expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id);
   expect(history.push).toHaveBeenLastCalledWith("/");
});
 