import { createContext,useEffect,useState } from "react"; 
import { onAuthStateChangedUser,createUserDocumentFromAuth } from "../../firebase/firebase.utils";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
})

export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedUser((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            } 
            setCurrentUser(user)})
       
        return unsubscribe
    },
    [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}