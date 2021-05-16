// tottal 4 cases

import { addExpense, editExpanse, removeExpense } from '../../actions/expenses';

test("../../actions/expenses should setup remove expense actions",()=>{
     const action=removeExpense({id:"123abc"});
     expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      id:"123abc"
     });
})

test("../../actions/expenses should setup editExpanse expense actions",()=>{
  const action=editExpanse("123abc",{notes:"learning testing"});
  expect(action).toEqual({
    type: "EDIT_EXPANSE",
    id:"123abc",
    update:{
      notes:"learning testing"
    }
  });
})



test("../../actions/expenses should setup default addExpense expense actions",()=>{
  const action=addExpense({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id:expect.any(String),
      description : "",
      note : "",
      amount : 0,
      createdAt : 0
    }
});
})


test("../../actions/expenses should setup  addExpense with values expense actions",()=>{
  const expenses ={
    description : "harish809",
    note : "im coding",
    amount : 100,
    createdAt : 2020
}
  const action=addExpense(expenses);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id:expect.any(String),
      ...expenses}
});
})
