import React from "react";
import {shallow} from "enzyme";
import ExpensifyDashBoard from "../../components/expensifyDashBoard";

test ("test/componenet/ExpensifyDashBoard should render it coreectly ",()=>{
      const wrapper=shallow(<ExpensifyDashBoard />);
      expect(wrapper).toMatchSnapshot();
})