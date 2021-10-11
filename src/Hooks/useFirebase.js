import { useEffect, useState }  from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";

const useFirebase=()=>{
    const [user,setUser] = useState({})
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signinUsingGoogle = ()=>{
       return signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user)
        })
    }
    const logOut=()=>{
        signOut(auth)
        .then( ()=>{
         
        })
    }
    //observe whether user auth state changed or not
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
          setUser(user)
            } 
          });
    },[auth])
     
    return{
        user,
        signinUsingGoogle,
        logOut
    }
}
export default useFirebase