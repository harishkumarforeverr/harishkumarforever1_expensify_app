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
                    <div className="page-header">
                    <div className="content-container"> 
                            <h1 className="page-header__title">Add Expanse </h1>
                    </div> 
                    </div> 
                    <div className="content-container"> 
                        <ExpanseForm 
                        onSubmit={this.StartAddExpense}
                        />
                    </div>
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