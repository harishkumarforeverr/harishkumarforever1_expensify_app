import firebase from "firebase/app"; 
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ6D7IUwC7WjuyJfjIniqN1liMTn0OUiA",
    authDomain: "expensify-app-cc6d9.firebaseapp.com",
    databaseURL: "https://expensify-app-cc6d9-default-rtdb.firebaseio.com",
    projectId: "expensify-app-cc6d9",
    storageBucket: "expensify-app-cc6d9.appspot.com",
    messagingSenderId: "672532568508",
    appId: "1:672532568508:web:9326499991da09023d33b9",
    measurementId: "G-NGVDXWW4M0"
  };

firebase.initializeApp(firebaseConfig);

const database=firebase.database();

export {firebase, database as default}








// database.ref("expenses").on("child_removed",(ChildSnapshot)=>{
//   console.log("child is remove :::: ", ChildSnapshot.key, ChildSnapshot.val());
// })


// database.ref("expenses").on("child_changed",(ChildSnapshot)=>{
//   console.log("child is Chnaged :::: ", ChildSnapshot.key, ChildSnapshot.val());
// })

 
// database.ref("expenses").on("child_added",(ChildSnapshot)=>{
//   console.log("expenese added :::: ", ChildSnapshot.key, ChildSnapshot.val());
// })

// setTimeout(()=>{
//    database.ref("expenses").push({
//     description:"new bike",
//     amount:8900,
//     notes:"buying the a new bike for me",
//     createdAt:2030
//    })
// },7000)



// database.ref("expenses").on("value",(snapshot)=>{
//   const expenses=[]; 
//   snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       })
//   })
//   console.log(expenses);  
// }) 


 
// database.ref("expenses").once("value").then((snapshot)=>{ 
//   const expenses=[]; 
//   snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       })
//   })
//   console.log(expenses);
// })


// Expenses.map((expense)=>{
//   database.ref("expenses").push(expense); 
// })

// const notes=[{
//                id:1,
//                title:"pens",
//                body:"for writing"
//             },{ 
//               id:2,
//               title:"apple laptop",
//               body:"for coding"
//             }]
// database.ref("notes").push({ 
//   id:2,
//   title:"apple laptop",
//   body:"for coding"
// });

 
// database.ref().set({
//     name:"harish809",
//     age:22,
//     stressLevel:6,
//     job:{
//       title:"sotware developer!",
//       company:"Google"
//     },
//     location:{
//       city:"nizamabad",
//       country:"india"
//     } 
// }) 

// // database.ref("location/city")
// // .once("value")
// // .then((snapshot)=>console.log(snapshot.val()))
// // .catch((e)=>console.log("eror while fetching the data"));

// // //1st case 
// // database.ref().on("value",(snapshot)=>console.log(snapshot.val()));

// // setTimeout(()=>{
// //   database.ref("age").set(150);
// // },2000)


// // // setTimeout(()=>{
// // //  database.ref().off();
// // // },5000)

// // setTimeout(()=>{
// //   database.ref("age").set(30);
// // },7000)




// // // 2nd case
// // const subscribe=(snapshot)=>console.log(snapshot.val());
// // database.ref().on("value",subscribe);

// // setTimeout(()=>{
// //   database.ref("age").set(130);
// // },2000)


// // setTimeout(()=>{
// //  database.ref().off(subscribe);
// // },5000)

// // setTimeout(()=>{
// //   database.ref("age").set(70);
// // },7000)



// // 3rd case  
// // database.ref().on("value",(snapshot)=>console.log(snapshot.val()));

// // setTimeout(()=>{
// //   database.ref("age").set(330);
// // },1000)


// // setTimeout(()=>{
// //  database.ref().off();
// // },3000)

// // setTimeout(()=>{
// //   database.ref("age").set(50);
// // },5000)
 



// // 4th case 
// // database.ref().on("value",(snapshot)=>{
// //   console.log(snapshot.val())
// // },(e)=>{
// //   console.log("error while fetching data");
// // });

// // setTimeout(()=>{
// //   database.ref("age").set(30);
// // },2000)


// // setTimeout(()=>{
// //  database.ref().off();
// // },4000)

// // setTimeout(()=>{
// //   database.ref("age").set(3000);
// // },6000)
 


// // //5th case 
// // database.ref().on("value",
// //   (snapshot)=> { 
// //     const val=snapshot.val();
// //     console.log
// //     (`my name is ${val.name} and i work as ${val.job.title} at ${val.job.company}`);
// //  });


// // // by my code 5th case run avali
// // setTimeout(()=>{
// //   database.ref().update({
// //     name:"harishkumarforever",
// //     "job/title":"mern stack developer",
// //     "job/company":"startup"
// //   });
// // },7000);

// // // by Manully changung the data in firebase 5th case run valau











