import React from "react";  
import ExpanseForm from "./ExpanseForm";
import { addExpense } from "../actions/expenses";
import {connect} from 'react-redux';

export class AddExpensesPage extends React.Component{
    addExpense=(expense)=>{ 
        this.props.addExpense(expense)
        this.props.history.push("/");
    }
    render(){
        return (
            <div>
                <h1>Add Expanse </h1>
                <ExpanseForm 
                onSubmit={this.addExpense}
                 />
            </div>
        );
    }
}
const mapDispatchToState=(dispatch)=>{
    return {
        addExpense:(expense)=>{  dispatch(addExpense(expense)); }
    }
}
 
export default connect(undefined,mapDispatchToState)(AddExpensesPage);