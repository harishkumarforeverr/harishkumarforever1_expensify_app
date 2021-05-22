import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from "../actions/filters";
import {sortByDate, sortByAmount,setStartDate,setEndDate} from "../actions/filters";
import {DateRangePicker} from "react-dates";
import moment from "moment";
// from i took the file from css  and placed it in src/app.js 

export class ExpensesListFilters extends React.Component{ 
      state={
            focusedInput:null
        } 
    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate) ;
        this.props.setEndDate(endDate) ;            
    }
    onTextChange=(e)=>{
       this.props.setTextFilter(e.target.value);   
    }
    onSortByChange=(e)=>{ 
        if(e.target.value=="amount") {
            this.props.sortByAmount();
        }   
        else if(e.target.value=="date"){
            this.props.sortByDate();
        }         
   }
    render(){ 
        return (
       <div>
            <div className="input-group"> 
                <div className="input-group__item"> 
                     <input 
                       className="text-input" 
                        type="text" 
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                        autoFocus
                        placeholder="search expenses(items)"
                        />
                </div>
                <div className="input-group__item"> 
                       <select 
                       className="select"
                        value={this.props.filters.sortBy}
                        onChange={this.onSortByChange}  
                        >
                        <option value="amount">Amount</option>
                        <option value="date">Date</option>
                        </select>
                </div>
                <div className="input-group__item"> 
                        <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput=>this.setState({focusedInput})}
                        startDateId="DateRangePicker_startDateId"
                        endDateId="DateRangePicker_endDateId"
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                        />      
                </div> 
               
              
          </div>
       </div>
    );
    }
}
 

const mapStateToProps=(state)=>{
    return {
        filters:state.filters
    }
}
const mapDispatchToProps=(dispatch)=>{ 
    return { 
        setStartDate  : (startDate)=>{ dispatch(setStartDate(startDate))  },
        setEndDate: (endDate)=>{ dispatch(setEndDate(endDate))},
        setTextFilter: (value)=>{dispatch(setTextFilter(value))},
        sortByAmount: ()=>{dispatch(sortByAmount())},
        sortByDate : ()=>{dispatch(sortByDate())},
    } 
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpensesListFilters);