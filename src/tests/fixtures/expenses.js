import moment from "moment";

export default [{
    id:0,
    description:"buy long note books",
    amount:30,
    notes:"buying the gun",
    createdAt:0
},{
    id:1,
    description:"my room rent",
    amount:2500,
    notes:"my house rent",
    createdAt:moment(0).subtract(4,"days").valueOf()
},{
    id:2,
    description:"phone Reacharge",
    amount:600,
    notes:"took creatied Card for my mom from SBI bank",
    createdAt:moment(0).add(4,"days").valueOf()
}];
 
