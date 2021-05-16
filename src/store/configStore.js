import {createStore,combineReducers} from "redux";
import expenseReducer from  "../reducer/expenses";
import filtersReducer from "../reducer/filters";
export default ()=>{
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    }));
    return store;
}

