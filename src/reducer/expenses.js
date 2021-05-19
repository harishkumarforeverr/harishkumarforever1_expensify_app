
// expanse Reducer 
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
        case "SET_EXPENSES":
            return action.expense; 
        default: return state
    }
}
