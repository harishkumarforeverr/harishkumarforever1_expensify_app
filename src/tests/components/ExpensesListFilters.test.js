import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import {filters, altFilters} from "../fixtures/filters";
import {ExpensesListFilters} from "../../components/ExpensesListFilters";

let setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate,wrapper;
beforeEach(()=>{
    setStartDate = jest.fn(),
    setEndDate = jest.fn(),
    setTextFilter = jest.fn(),
    sortByAmount = jest.fn(),
    sortByDate  = jest.fn(), 
    wrapper=shallow(
                    <ExpensesListFilters 
                    setStartDate={setStartDate} 
                    setEndDate={setEndDate}
                    setTextFilter={setTextFilter}
                    sortByAmount={sortByAmount}
                    sortByDate={sortByDate}      
                    filters={filters}
                    />
                   );
})
test("src/test/componenet/ExpensesListFilters :::::::::: should defualt default values and match Snapshot ",()=>{  
    expect(wrapper).toMatchSnapshot();
});

test("src/test/componenet/ExpensesListFilters :::::::::: should handle alterFilters and match snapshot ",()=>{  
    wrapper.setProps({
        filters:{...altFilters}
    }) 
    expect(wrapper).toMatchSnapshot();
});

test("src/test/componenet/ExpensesListFilters :::::::::: textfilters  ",()=>{  
    // const obj={
    //     target:{
    //         value:"harish"
    //     }
    // }
    // wrapper.setProps({
    //     filters:{...altFilters}
    // })  
    // wrapper.find("input").prop("onChange")(obj);

    // sir said method
   const value="rent";
   wrapper.find("input").simulate("change",{
    target:{
        value
    }
   });
   expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by date
test("src/test/componenet/ExpensesListFilters :::::::::: should sort by date  ",()=>{  
    // const obj={
    //     target:{
    //         value:"date"
    //     }
    // }
    const value="date";
    wrapper.setProps({
        filters:{...altFilters}
    })  
    wrapper.find("select").simulate("change",{
        target:{
            value
        }
    });
   expect(sortByDate).toHaveBeenCalled();   
});

// should sort by amount
test("src/test/componenet/ExpensesListFilters :::::::::: should sort by amount  ",()=>{  
    // const obj={
    //     target:{
    //         value:"amount"
    //     }
    // }
    // wrapper.setProps({
    //     filters:{...altFilters}
    // })  
    // wrapper.find("select").prop("onChange")(obj);
    const value="amount"; 
    wrapper.find("select").simulate("change",{
        target:{
            value
        }
    });
   expect(sortByAmount).toHaveBeenCalled();   
});



// should (withStyles(DateRangePicker)   onDatesChange
test("src/test/componenet/ExpensesListFilters :::::::::: should handle date change  withStyles(DateRangePicker) onDateChange",()=>{   
    const Obj={
        startDate:altFilters.startDate,
        endDate:altFilters.endDate
    }
    wrapper.setProps({
        filters:{...altFilters}
    })  
    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")(Obj);
   expect(setStartDate).toHaveBeenLastCalledWith(Obj.startDate);   
   expect(setEndDate).toHaveBeenLastCalledWith(Obj.endDate);
});

// should (withStyles(DateRangePicker)   onFocusChange
test("src/test/componenet/ExpensesListFilters :::::::::: should handle date change  withStyles(DateRangePicker) onFocusChange",()=>{   
    wrapper.setProps({
        filters:{...altFilters}
    })   
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")("startDate"); 
    expect(wrapper.state("focusedInput")).toBe("startDate");
});

