import React from 'react';
import {connect} from 'react-redux';
import ExpanseForm from "./ExpanseForm";
import {editExpanse} from "../actions/expenses";
import {removeExpense} from '../actions/expenses';


export class EditExpensesPage extends React.Component{ 
    editExpanse=(expense)=>{  
        this.props.editExpanse(this.props.expense.id, expense );  
        this.props.history.push("/");
    }
    onClick=()=>{  
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push("/");
       }
    render(){
        return (
            <div>
                <ExpanseForm 
                    expense={this.props.expense}
                    onSubmit={this.editExpanse}
                 /> 
                 <button
                  onClick= {this.onClick } 
                  >Remove
                  </button>
            </div>
        );
    }
}
const mapDispatchToState=(dispatch)=>{
    return { 
    editExpanse : (id,expense)=>{   dispatch(editExpanse(id,expense))   },
    removeExpense:(id )=>{ dispatch(removeExpense({ id }))  }
    }
}

const mapStateToProps=(state, props)=>{
    return {
        expense : state.expenses.find((expense)=> expense.id===props.match.params.id )
    }
}
export default connect(mapStateToProps,mapDispatchToState)(EditExpensesPage);