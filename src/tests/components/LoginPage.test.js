import React from "react";
import {LoginPage} from "../../components/LoginPage";
import {shallow} from "enzyme";

test("should render the LoginPage Snaphost ",()=>{
    const component=shallow(<LoginPage startLogin={()=>{}} />);
    expect(component).toMatchSnapshot();
})

test("should render the LoginPage Snaphost ",()=>{
    const startLogin=jest.fn();
    const wrapper=shallow(<LoginPage startLogin={startLogin} />); 
    wrapper.find("button").simulate("click");
    expect(startLogin).toHaveBeenCalled(); 
})