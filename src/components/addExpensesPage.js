import React from "react";  
import ExpanseForm from "./ExpanseForm";
import { StartAddExpense } from "../actions/expenses";
import {connect} from 'react-redux';

export class AddExpensesPage extends React.Component{
    StartAddExpense=(expense)=>{ 
        this.props.StartAddExpense(expense)
        this.props.history.push("/");
    }
    render(){
        return (
            <div>
                <h1>Add Expanse </h1>
                <ExpanseForm 
                onSubmit={this.StartAddExpense}
                 />
            </div>
        );
    }
}
const mapDispatchToState=(dispatch)=>{
    return {
        StartAddExpense:(expense)=>{  dispatch(StartAddExpense(expense)); }
    }
}
 
export default connect(undefined,mapDispatchToState)(AddExpensesPage);