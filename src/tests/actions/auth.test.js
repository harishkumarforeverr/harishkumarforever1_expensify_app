import {Login,Logout} from "../../actions/auth";

test("should return correct Login action Object ",()=>{
    const uid="128"
    const action=Login(uid);
    expect(action).toEqual({
        type:"LOGIN",
        uid
    })
});  

test("should return correct Logout action Object ",()=>{ 
    const action=Logout();
    expect(action).toEqual({
        type:"LOGOUT" 
    })
});  