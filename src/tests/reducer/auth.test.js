import AuthReducer from "../../reducer/auth"; 
test("should handle the login action in the AuthReducer ",()=>{ 
    const actionObj={
        type:"LOGIN",
        uid:128
    }
     const state=AuthReducer({}, actionObj);
     expect(state).toEqual({uid:actionObj.uid});
});


test("should handle the logout action in the AuthReducer ",()=>{ 
    const actionObj={
        type:"LOGOUT" 
    }
     const state=AuthReducer({ uid:128 }, actionObj);
     expect(state).toEqual({});
});