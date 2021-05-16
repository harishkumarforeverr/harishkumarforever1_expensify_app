// totoal 6 cases
import moment from "moment";
import {setTextFilter, sortByDate,sortByAmount,setStartDate,setEndDate} from "../../actions/filters";

test("../../actions/filters setTextFilters with some value",()=>{
    const action=setTextFilter("passing text");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"passing text"
    });
})

test("../../actions/filters setTextFilters with defualt value",()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    });
})

test("../../actions/filters sortByDate with defualt value",()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE" 
    });
})

//co,plted


test("../../actions/filters sortByAmount with defualt value",()=>{
    const action=sortByAmount(2018);
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    });
})

//complted
test("../../actions/filters setStartDate with defualt value",()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    });
})

test("../../actions/filters setEndDate with defualt value",()=>{
    const action=setEndDate(moment(4));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate :moment(4)
    });
})
