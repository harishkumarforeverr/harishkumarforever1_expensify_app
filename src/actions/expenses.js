import { v4 as uuid } from 'uuid';
import database from "../firebase/firebase";
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});
//StartAddExpense
export const StartAddExpense=(expense={})=>{
    return (dispatch)=>{
          const { description = "",  note = "", amount = 0, createdAt = 0  }=expense
          const addingExpensesObject={description,note,amount,createdAt };
          return database.ref("expenses").push(addingExpensesObject).then((snapshot)=>{
              dispatch(addExpense({
                  id:snapshot.key,
                  ...addingExpensesObject
              }))
          });
    }
}

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
// EDIT_EXPENSE

export const editExpanse = (id, update) => ({
    type: "EDIT_EXPANSE",
    id,
    update
})

//SET expenses
export const setExpenses=(expense)=>({
    type:"SET_EXPENSES",
    expense 
})

export const startSetExpenses=()=>{
    return (dispatch)=>{
        return database.ref("expenses").once("value").then((snapshot)=>{   
            const expenses=[];
            snapshot.forEach((childSnapShot)=>{     
                expenses.push({
                    id:childSnapShot.key, 
                    ...childSnapShot.val()
              })
            })
            dispatch(setExpenses(expenses));
        })
    }
}