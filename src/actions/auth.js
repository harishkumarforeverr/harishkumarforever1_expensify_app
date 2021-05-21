import {firebase,GoogleAuthProvider} from "../firebase/firebase";

export const Login=(uid)=>{
    return {
        type:"LOGIN",
        uid
    }
}


export const Logout=()=>{
    return {
type:"LOGOUT" 
    }
}

export const startLogin=()=>{
    return ()=>{
        firebase.auth().signInWithRedirect(GoogleAuthProvider);
    }
}

export const startLogOut=()=>{
    return ()=>{
        firebase.auth().signOut();
    }
}