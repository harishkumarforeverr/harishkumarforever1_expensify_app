import moment from 'moment';
import React from 'react'; 
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';

export default class ExpanseForm extends React.Component{
    constructor(props){   
       super(props);
       this.state={ 
            description:props.expense ? props.expense.description:"",
            note:props.expense ? props.expense.note:"",
            amount:props.expense ? (props.expense.amount/100).toString() :"",
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            focused:false,
            formErrorMessage:""
        };
    }
    onDescriptionChange=(e)=>{ 
        this.setState(()=>{
            const description=e.target.value;
            return {
                description
            }
        })
    } 
    onNotesChange=(e)=>{
        this.setState(()=>{
            const note=e.target.value
            return {
                note
            }
        })
    }
    onAmountChange=(e)=>{ 
        const amount=e.target.value ;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount
                }
            });
        }  
    } 
    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState({createdAt})
        }
    }
    onSubmit=(e)=>{
      e.preventDefault(); 
      if(this.state.description && this.state.amount){ 
        this.setState(()=>{
            return {
                formErrorMessage:""
            }
        }); 
       this.props.onSubmit({
           description:this.state.description,
           note:this.state.note,
           amount:parseFloat(this.state.amount,10)*100,
           createdAt:this.state.createdAt.valueOf() 
       });       
      }
      else{ 
        this.setState(()=>{
            return {
                formErrorMessage:"please provide Description and Amount (mandatory.)"
            }
        }) 
        
      }
    }
    render(){
        return (   
            <form className="form" onSubmit={this.onSubmit}>
             {this.state.formErrorMessage && <h4 className="form__error"> {this.state.formErrorMessage} </h4>}
              <input 
              className="text-input"
               type="text"
               value={this.state.description}
               placeholder="add your expanses" 
               autoFocus
               onChange={this.onDescriptionChange}
               />
               <input 
               className="text-input"
               type="number" 
               placeholder="add amount" 
               value={this.state.amount}
               onChange={this.onAmountChange}
               />
               <SingleDatePicker 
               date={this.state.createdAt}
               onDateChange={this.onDateChange}
               focused={this.state.focused}
               onFocusChange={ ({focused}) =>this.setState({ focused }) }
               numberOfMonths={1}
               isOutsideRange={()=>false}
               />
               <textarea
               className="textarea"
               placeholder="add a notes to your expenses (Optional !)"
               value={this.state.note}
               onChange={this.onNotesChange}
               >

               </textarea>
               <div> 
                    <button class="button"> Save Expense </button>
               </div>
            </form> 
        );
    }
}