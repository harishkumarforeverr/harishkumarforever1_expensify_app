import React from "react"; 
import {shallow} from "enzyme";
import PageNotFound from "../../components/pageNotFound"; 

test("test/component/PageNotFound  :::: should render the componet nicely",()=>{
    const wrapper=shallow(<PageNotFound/>);
    expect(wrapper).toMatchSnapshot();
})