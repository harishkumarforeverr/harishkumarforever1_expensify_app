import moment from "moment";

export default [{
    id:0,
    description:"Gun",
    amount:300,
    notes:"buying the gun",
    createdAt:0
},{
    id:1,
    description:"rent",
    amount:2500,
    notes:"my house rent",
    createdAt:moment(0).subtract(4,"days").valueOf()
},{
    id:2,
    description:"creatied card",
    amount:8000,
    notes:"took creatied Card for my mom from SBI bank",
    createdAt:moment(0).add(4,"days").valueOf()
}];
 
