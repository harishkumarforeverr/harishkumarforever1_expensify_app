import expenseReducer from "../../reducer/expenses";
import expenses from "../fixtures/expenses";

test('import expenseReducer from "../../reducer/expenses" ::::::: set_up_default',()=>{
    const action=expenseReducer(undefined, {type:"@@INIT"});
    expect(action).toEqual([]);
})

test('import expenseReducer from "../../reducer/expenses" :::: ADD_EXPENSE  to the existing expenese',()=>{
    const expense ={
        id:"ok123",
        description:"GGC Fee",
        amount:10,
        notes:"joing a cllg",
        createdAt:2018
    }
    const action={
    type:"ADD_EXPENSE",
     expense
    } 
    const state=expenseReducer(expenses,action); 
    expect(state).toEqual([...expenses,expense]);
}) 
// with empty state / undefined state

test('import expenseReducer from "../../reducer/expenses" :::: ADD_EXPENSE default values',()=>{
    const action={
    type:"ADD_EXPENSE",
     expense :{ 
       description : "",
       note : "",
       amount : 0,
       createdAt : 0
     }
    }
    const state=expenseReducer(undefined,action);
    expect(state).toEqual([action.expense]);
})

test('import expenseReducer from "../../reducer/expenses" :::: ADD_EXPENSE userfined values',()=>{
    const action={
    type:"ADD_EXPENSE",
     expense :{ 
       description : "pens",
       note : "for degree final year",
       amount : 50,
       createdAt :2020
     }
    }
    const state=expenseReducer(undefined,action);
    expect(state).toEqual([action.expense]);
})

test('import expenseReducer from "../../reducer/expenses" ::::::: REMOVE_EXPENSE with an id ',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual([ expenses[0],expenses[2] ]);
});


test('import expenseReducer from "../../reducer/expenses" ::::::: REMOVE_EXPENSE shoudnt remove without an expenses with face id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:"123abc"
    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
});
 

 // edit an expenses
 test('import expenseReducer from "../../reducer/expenses" ::::::: EDIT_EXPANSE with an id ',()=>{
    const action={
        type:'EDIT_EXPANSE',
        id:expenses[1].id,
        update:{ 
            description:"tour",
            amount:5000,
        }
    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual([ expenses[0],{...expenses[1],...action.update},expenses[2] ]);
});


test('import expenseReducer from "../../reducer/expenses" ::::::: EDIT_EXPANSE shoudnt remove without an expenses with face id',()=>{
    const action={
        type:'EDIT_EXPANSE',
        id:"123abc"
    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
});
 
test("should hanndle expenses in the reducers SET_EXPENSES",()=>{
    const action={
        type:"SET_EXPENSES",
        expense:{
            description:"jajja",
            amount:1000,
            note:"kalla",
            createdAt:1010       
        }
    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual(action.expense);
});