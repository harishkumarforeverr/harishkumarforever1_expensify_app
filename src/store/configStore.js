import {createStore,combineReducers,applyMiddleware} from "redux";
import expenseReducer from  "../reducer/expenses";
import filtersReducer from "../reducer/filters";
import thunk from "redux-thunk";

const composeEnchancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
    const store = 
    createStore(
                 combineReducers({
                    expenses: expenseReducer,
                    filters: filtersReducer
                    }),
                 composeEnchancer(applyMiddleware(thunk))
                // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                //    applyMiddleware(thunk)
                );
    return store;
}

