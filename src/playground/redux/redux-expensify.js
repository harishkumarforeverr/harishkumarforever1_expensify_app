import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';
// ADD_EXPENSE
const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
// EDIT_EXPENSE

const editExpanse = (id, update) => ({
    type: "EDIT_EXPANSE",
    id,
    update
})
// SET_TEXT-FILTER
const setTextFilter=(text="")=>({
    type:"SET_TEXT_FILTER",
    text
})

// SORT_BY_DATE
const sortByDate=()=>({
    type:"SORT_BY_DATE"
});
//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT"
});
// SET_START_DATE
const setStartDate=(startDate)=>({
   type:"SET_START_DATE",
   startDate
});
// SET_END_DATE
const setEndDate=(endDate)=>({
  type:"SET_END_DATE",
  endDate
});

// expanse Reducer 
const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return ([
                ...state,
                action.expense
            ]);
        case "REMOVE_EXPENSE":
            return state.filter((expense) => expense.id !== action.id);
        case "EDIT_EXPANSE" :
            return state.map((expanse)=>{
               if(expanse.id===action.id){
                   return {
                    ...expanse,
                    ...action.update
                   }
               }
               else{
                   return expanse;
               }
            });

        default: return state
    }
}

const filtersReducersDefaultState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return ({
                  ...state,  
                 text : action.text
            });

        case "SORT_BY_DATE" :
            return ({
               ...state,
               sortBy:"date"
            });

        case "SORT_BY_AMOUNT" :
            return({
                ...state,
                sortBy:"amount"
            })
        case "SET_START_DATE":
            return ({
               ...state,
               startDate:action.startDate  
            });
        case "SET_END_DATE":
            return ({
                ...state,
                endDate:action.endDate

            });
        default: 
          return state
    }
}

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
}));

const getVisibleExpenses = (expenses, {text,sortBy, startDate,endDate}) =>{ 
    return expenses.filter((expense)=>{  
        const startDateMatch =  typeof startDate !=='number' || expense.createdAt >= startDate ;
        const endDateMatch= typeof endDate !=='number' || expense.createdAt <= endDate  ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        return startDateMatch && endDateMatch && textMatch;  
    }).sort((a,b)=>{
         if(sortBy=="date"){
             return a.createdAt < b.createAt? 1 : -1 ;          
         }
         else if(sortBy=="amount"){
             return a.amount < b.amount ? 1 : -1; 
         }
    });
}

store.subscribe(() => {
    const state=store.getState();
    const visibleExpense=getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
})

const expenseRent = store.dispatch(addExpense({ description: "rent", amount: 1000, createdAt: 1000}));
const expenseCoffee = store.dispatch(addExpense({ description: "coffee", amount: 1300 , createdAt: -1000 }));

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));


// store.dispatch(removeExpense({ id: expenseRent.expense.id }));

// store.dispatch(editExpanse(expenseCoffee.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("fee"));

// store.dispatch(setTextFilter());

store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());


 