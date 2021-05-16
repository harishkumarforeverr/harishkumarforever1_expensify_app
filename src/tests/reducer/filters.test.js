import filtersReducers from "../../reducer/filters";
import moment from "moment";
const filtersReducersDefaultState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
}

test('import filtersReducers from "../../reducer/filters" ::::: setUpDefaultVlaues',()=>{
    const action=filtersReducers(undefined,{type:"@@INIT"}); 
    expect(action).toEqual({
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})
test('import filtersReducers from "../../reducer/filters" :::::  SET_TEXT_FILTER ',()=>{ 
    const actionObject={
     type:"SET_TEXT_FILTER",
     text :"rent"
    }
    const action=filtersReducers(undefined,actionObject); 
    expect(action.text).toEqual("rent")
 })

 // completed
 
test('import filtersReducers from "../../reducer/filters" :::::  SORT_BY_DATE ',()=>{ 
    const action={
     type:"SORT_BY_DATE" 
    } 
    const currentState={ 
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
     }
    const state=filtersReducers(currentState,action); 
    expect(state.sortBy).toEqual("date")
 })

 
test('import filtersReducers from "../../reducer/filters" :::::  SORT_BY_AMOUNT ',()=>{  
    const action=filtersReducers(undefined,{ type:"SORT_BY_AMOUNT" }); 
    expect(action.sortBy).toBe("amount");
 })
 // complted 
 test('import filtersReducers from "../../reducer/filters" :::::  SET_START_DATE ',()=>{ 
     const actionObject={
      type:"SET_START_DATE" ,
      startDate:moment()
     } 
     const action=filtersReducers(undefined,actionObject); 
     expect(action.startDate).toEqual( actionObject.startDate);
  }
  )
  // complted 
  test('import filtersReducers from "../../reducer/filters" :::::  SET_END_DATE ',()=>{ 
      const actionObject={
       type:"SET_END_DATE" ,
       endDate:moment()
      }
      const action=filtersReducers(filtersReducersDefaultState,actionObject); 
      expect(action.endDate).toEqual(actionObject.endDate)
   })