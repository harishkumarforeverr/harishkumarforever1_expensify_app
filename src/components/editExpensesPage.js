import React from 'react';
import {connect} from 'react-redux';
import ExpanseForm from "./ExpanseForm";
import {startEditExpense} from "../actions/expenses";
import {startRemoveExpense} from '../actions/expenses';


export class EditExpensesPage extends React.Component{ 
    startEditExpense=(expense)=>{  
        this.props.startEditExpense(this.props.expense.id, expense );  
        this.props.history.push("/");
    }
    onClick=()=>{  
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push("/");
       }
    render(){
        return (
            <div className="marginComponent">
               <div className="page-header"> 
                 <div className="content-container page-header__title"> 
                    <h1>Edit Expense</h1>
                 </div>
               </div>

               <div className="content-container"> 
                    <ExpanseForm 
                        expense={this.props.expense}
                        onSubmit={this.startEditExpense}
                    /> 
                    <button className="button-secondary"
                    onClick= {this.onClick } 
                    >Remove Expense
                    </button>
               </div>
            </div>
        );
    }
}
const mapDispatchToState=(dispatch)=>{
    return { 
    startEditExpense : (id,expense)=>{   dispatch(startEditExpense(id,expense))   },
    startRemoveExpense:(id )=>{ dispatch(startRemoveExpense({ id }))  }
    }
}

const mapStateToProps=(state, props)=>{
    return {
        expense : state.expenses.find((expense)=> expense.id===props.match.params.id )
    }
}
export default connect(mapStateToProps,mapDispatchToState)(EditExpensesPage);