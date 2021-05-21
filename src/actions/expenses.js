import { v4 as uuid } from 'uuid';
import database from "../firebase/firebase";
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});
//StartAddExpense
export const StartAddExpense=(expense={})=>{
    return (dispatch,getState)=>{
         const uid=getState().auth.uid;
          const { description = "",  note = "", amount = 0, createdAt = 0  }=expense
          const addingExpensesObject={description,note,amount,createdAt };
          return database.ref(`users/${uid}/expenses`).push(addingExpensesObject).then((snapshot)=>{
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

export const startRemoveExpense=({ id })=>{ 
    return (dispatch,getState)=>{
            const uid=getState().auth.uid;
           return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
               dispatch(removeExpense({ id }));
           })
    }
}
// EDIT_EXPENSE

export const editExpanse = (id, update) => ({
    type: "EDIT_EXPANSE",
    id,
    update
})


export const startEditExpense=(id,updates)=>{
    return (dispatch,getState)=>{
         const uid=getState().auth.uid;
        return  database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
             dispatch(editExpanse(id,update));
         })
    }
}
//SET expenses
export const setExpenses=(expense)=>({
    type:"SET_EXPENSES",
    expense 
})

export const startSetExpenses=()=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot)=>{   
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