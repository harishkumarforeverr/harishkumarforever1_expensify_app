import React from "react"
import{shallow} from "enzyme";
import LoginPage from "../../components/LoadingPage";

test("LoadingPage.test  should match snapshot ",()=>{
     const wrapper=shallow(<LoginPage/>);
     expect(wrapper).toMatchSnapshot();
});