import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import AuthReducer from "../reducer/auth";
import expenseReducer from  "../reducer/expenses";
import filtersReducer from "../reducer/filters";

// const composeEnchancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
    const store = 
    createStore(
                 combineReducers({
                    expenses: expenseReducer,
                    filters: filtersReducer,
                    auth:AuthReducer
                    }), 
                //  composeEnchancer(applyMiddleware(thunk))
                // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                applyMiddleware(thunk)
                );
    return store;
}

