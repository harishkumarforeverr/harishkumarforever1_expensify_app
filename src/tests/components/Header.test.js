import React from 'react';
import {shallow} from "enzyme"; 
import {Header} from "../../components/Header";

test("should render Header correctly :::: ",()=>{
    const wrapper=shallow(<Header startLogOut={()=>{}}/>);  
    expect(wrapper).toMatchSnapshot();
});


test("should call logOut on button Click :::: ",()=>{
    const startLogOut=jest.fn();
    const wrapper=shallow(<Header startLogOut={startLogOut}/>);    
    wrapper.find("button").simulate("click");
    expect(startLogOut).toHaveBeenCalled();
});
