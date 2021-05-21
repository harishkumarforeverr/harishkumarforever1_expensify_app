// tottal 4 cases
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {setExpenses,
        addExpense,
        editExpanse,
        removeExpense,
        StartAddExpense ,
        startSetExpenses,
        startRemoveExpense,
        startEditExpense
       }
       from '../../actions/expenses';
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore=configureStore([thunk]);

// beforeEach((done)=>{
//   const expensesData=[];
//   expenses.forEach(({id, description ,amount,notes,createdAt})=>{
//     expensesData[id]={description,amount,notes,createdAt}
//   })
//   database.ref("expenses").set(expensesData).then(()=>done()); 

// })

test("../../actions/expenses should setup remove expense actions",()=>{
     const action=removeExpense({id:"123abc"});
     expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      id:"123abc"
     });
})

test("../../actions/expenses should setup editExpanse expense actions",()=>{
  const action=editExpanse("123abc",{notes:"learning testing"});
  expect(action).toEqual({
    type: "EDIT_EXPANSE",
    id:"123abc",
    update:{
      notes:"learning testing"
    }
  });
})



test("../../actions/expenses should setup default addExpense expense actions",()=>{
  const action=addExpense({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {}
});
})


test("../../actions/expenses should setup  addExpense with values expense actions",()=>{
  const action=addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense:expenses[2]
});
})


//StartAddExpense
// test("../../actions/expenses file lo / StartAddExpense  with user data ::::::: ",(done)=>{
//    const store=createMockStore({});  
//    const expense={
//       description:"Kawashaki",
//       amount:9876300,
//       note:"my Dream",
//       createdAt:2030
//    } 
//    store.dispatch(StartAddExpense(expense)).then(()=> { 
//     const action=store.getActions();
//               expect(action[0]).toEqual({ 
//                 type: "ADD_EXPENSE",
//                 expense:{
//                   id:expect.anything(),   
//                 ...expense
//                 }
//       })
//     database.ref(`expenses/${action[0].expense.id}`).once("value").then((snapshot)=>{
//          expect(snapshot.val()).toEqual(expense);
//     })
//     done();   
//  })  
// });


// //play with promise

// test("../../actions/expenses file lo / StartAddExpense  with user data ::::::: ",(done)=>{
//    const store=createMockStore({});  
//    const expense={
//       description:"Kawashaki",
//       amount:9876300,
//       note:"my Dream",
//       createdAt:2030
//    } 
//    store.dispatch(StartAddExpense(expense)).then(()=> { 
//     const action=store.getActions();
//       expect(action[0]).toEqual({ 
//         type: "ADD_EXPENSE",
//         expense:{
//           id:expect.anything(),   
//         ...expense
//         }
//       })
//       return database.ref(`expenses/${action[0].expense.id}`).once("value");
//      }).then((snapshot)=>{
//             expect(snapshot.val()).toEqual(expense);
//             done();   
//       })  
// });

// //doing now
// // //StartAddExpense passing default values
// test("../../actions/expenses file lo / StartAddExpense  with default data ::::::: ",(done)=>{
//    const store=createMockStore({}); 
//    const expense={
//       description:"",
//       amount:0,
//       note:"",
//       createdAt:0
//    }
//    store.dispatch(StartAddExpense(expense)).then(()=>{ 
//      const action=store.getActions();
//      expect(action[0]).toEqual({ 
//         type: "ADD_EXPENSE",
//         expense:{
//           id:expect.anything(),   
//         ...expense
//         }
//      })

//     return database.ref(`expenses/${action[0].expense.id}`).once("value");
//      }).then((snapshot)=>{
//             expect(snapshot.val()).toEqual(expense);
//             done();   
//     })  
// });


//doing
// //StartAddExpense passing the empty Object
// test("../../actions/expenses file lo / StartAddExpense  with default data ::::::: ",(done)=>{
//     const store=createMockStore({}); 
//     const expense={
//         description:"",
//         amount:0,
//         note:"",
//         createdAt:0
//     }
//    store.dispatch(StartAddExpense({})).then(()=>{ 
//      const action=store.getActions();
//      expect(action[0]).toEqual({ 
//         type: "ADD_EXPENSE",
//         expense:{
//           id:expect.anything(),   
//         ...expense
//         }
//      })
//     return database.ref(`expenses/${action[0].expense.id}`).once("value");
//      }).then((snapshot)=>{
//             expect(snapshot.val()).toEqual(expense);
//             done();   
//     })  
// });


test("../../actions/expeneses setExpenses ",()=>{
      const state=setExpenses(expenses);
     expect(state).toEqual({
        type:"SET_EXPENSES",
        expense:expenses
      })
})


// pending 
// test("src/test/actions/expenese/startSetExpenses:::: should get expenses from the firebase and set redux store",(done)=>{
//     const store=createMockStore({});
//     store.dispatch(startSetExpenses()).then(()=>{ 
//       const action=store.getActions(); 
//       expect(action[0]).toEqual({
//         type:"SET_EXPENSES",
//         expense:[
//           {
//             ...expenses[0],
//             id:JSON.stringify(expenses[0].id)
//           },
//           {
//             ...expenses[1],
//             id:JSON.stringify(expenses[1].id)
//           },
//           {
//             ...expenses[2],
//             id:JSON.stringify(expenses[2].id)
//           }
//         ]
//       })
//       done(); 
//     });
// })

// // pending
// test("src/test/actions/expenese/startRemoveExpense:::: shouldremove expenses from the firebase and remove redux store",(done)=>{
//    const store=createMockStore(expenses);
//         store.dispatch(startRemoveExpense({id:expenses[1].id})).then(()=>{
//           const action=store.getActions();
//           expect(action[0]).toEqual({ 
//               type: "REMOVE_EXPENSE",
//               id:expenses[1].id
//           })
//            return database.ref(`expenses/${expenses[1].id}`).once("value");
//         }).then((snapshot)=>{
//           expect(JSON.stringify(snapshot)).toBe(JSON.stringify(null)); 
//           done();
//         })
// }) 


// // pending
// test("src/test/actions/expenese/startEditExpense:::: shouldremove expenses from the firebase and remove redux store",(done)=>{
//    const store=createMockStore(expenses);
//         store.dispatch(startEditExpense(expenses[1].id, {
//           description:"school fee",
//           amount:10000,      
//         })).then(()=>{
//           const action=store.getActions();
//           expect(action[0]).toEqual({ 
//               type: "EDIT_EXPANSE",
//               id:expenses[1].id,
//               update:{  
//                 amount:10000,
//                 description:"school fee"
//               }

//           })
//            return database.ref(`expenses/${expenses[1].id}`).once("value");
//         }).then((snapshot)=>{
//           expect(snapshot.val()).toEqual({
//               ...expenses[1],
//               amount:10000,
//               description:"school fee"
//           });
//           done();
//         })
// })  
