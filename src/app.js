import React from "react";
import ReactDOM from "react-dom"; 
import {Provider} from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configStore";
import {startSetExpenses,setExpenses} from "./actions/expenses";
import {firebase} from "./firebase/firebase";
import {history} from "./routers/AppRouter";
import 'react-dates/lib/css/_datepicker.css';  // the import belong to the src/componnet/ExpensesListFilters
import "normalize.css/normalize.css"
import "./styles/styles.scss";  
import "./firebase/firebase";
import expenses from "./tests/fixtures/expenses"; 
import {Login,Logout} from "./actions/auth";
// import "./playground/promises";

const store=configStore();   

const jsx=(
    <div>
        <Provider store={store}>
           <AppRouter />
        </Provider>
    </div>
) 


//offline mode
ReactDOM.render(jsx, document.getElementById("app")); 
store.dispatch(setExpenses(expenses));
// offline mode ends her




//online mode
// ReactDOM.render(<h1>loading</h1>, document.getElementById("app"));  

// let isUserInterfaceRendered=false;
// const AppRenderer=()=>{ 
//     if(!isUserInterfaceRendered){ 
//         ReactDOM.render(jsx, document.getElementById("app")); 
//         isUserInterfaceRendered=true;
//     }
// }

//  firebase.auth().onAuthStateChanged((user)=>{
//       if(user){
//           const uid=user.uid; 
//           store.dispatch(Login(uid)); 
//            store.dispatch(startSetExpenses()).then(()=>{ 
//                 AppRenderer();        
//                 if(history.location.pathname==='/'){   
//                     history.push("/dashboard");
//                 }
//            })
//            console.log("Login"); 
//       }
//       else{
//        store.dispatch(Logout());
//         console.log("Logout");
//          AppRenderer();
//          history.push("/");
//        }
//  })