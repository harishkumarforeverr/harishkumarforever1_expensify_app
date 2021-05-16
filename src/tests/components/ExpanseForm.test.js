import React from 'react';
import {shallow} from "enzyme";
import moment from "moment";
import ExpanseForm from "../../components/ExpanseForm";
import expenses from "../fixtures/expenses";
 
test("src/test/componet/ExpanseForm  :: should render component correctly",()=>{
    const wrapper=shallow(<ExpanseForm />);
    expect(wrapper).toMatchSnapshot(); 
})


test("src/test/componet/ExpanseForm  :: should render component correctly",()=>{
    const wrapper=shallow(<ExpanseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot(); 
}) 

test("src/test/componet/ExpanseForm  :: checking for form submit ",()=>{
    const wrapper=shallow(<ExpanseForm />); 
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit",{
        preventDefault : ()=>{}
    });
    expect(wrapper.state('formErrorMessage').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("src/test/componet/ExpanseForm  ::  should render input[0] correctly ",()=>{
     const value="harish809";
      const wrapper=shallow(<ExpanseForm />);
      wrapper.find("input").at(0).simulate("change",{
          target:{
             value
          }
      })
      expect(wrapper.state("description")).toBe(value);
});
//textarea
test("src/test/componet/ExpanseForm  ::  should render textarea correctly ",()=>{
    const value="harish809";
     const wrapper=shallow(<ExpanseForm />);
     wrapper.find("textarea").simulate("change",{
         target:{
            value
         }
     })
     expect(wrapper.state("note")).toBe(value);
});

//valid amount
test("src/test/componet/ExpanseForm  ::  should render valid amount correctly ",()=>{
    const value="123.50";
     const wrapper=shallow(<ExpanseForm />);
     wrapper.find("input").at(1).simulate("change",{
         target:{
            value
         }
     })
     expect(wrapper.state("amount")).toBe(value);
});


//Invalid amount
test("src/test/componet/ExpanseForm  ::  should render Invalid amount correctly ",()=>{
    const value="123.530";
     const wrapper=shallow(<ExpanseForm />);
     wrapper.find("input").at(1).simulate("change",{
         target:{
            value
         }
     })
     expect(wrapper.state("amount")).toBe("");
});


test("src/test/componet/ExpanseForm  ::  form must be submit with valid date and using spy in our code ",()=>{
    const onSubmitSpy=jest.fn(); 
    const wrapper=shallow(<ExpanseForm expense={expenses[2]}  onSubmit={onSubmitSpy}  />); 
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{} 
    });
    expect(wrapper.state("formErrorMessage")).toBe(""); 
    expect(onSubmitSpy).toHaveBeenLastCalledWith({  
        description:expenses[2].description,
        note:undefined,
        amount:expenses[2].amount,
        createdAt:expenses[2].createdAt
    });
})

test("src/test/componet/ExpanseForm  ::  should render SingleDatePicker onDateChange() correctly ",()=>{
     const now=moment();
     const wrapper=shallow(<ExpanseForm />);
     wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);  
     expect(wrapper.state("createdAt")).toEqual(now);
});


test("src/test/componet/ExpanseForm  ::  should render SingleDatePicker onFocusChange() correctly ",()=>{
    const now=moment();
    const wrapper=shallow(<ExpanseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused:true});  
    expect(wrapper.state("focused")).toEqual(true);
});

test("src/test/componet/ExpanseForm  ::  should render SingleDatePicker onFocusChange() correctly ",()=>{
    const now=moment();
    const wrapper=shallow(<ExpanseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused:false});  
    expect(wrapper.state("focused")).toEqual(false);
});
