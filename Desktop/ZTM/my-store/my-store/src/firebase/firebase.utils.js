import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoqyN_T_im9uGFEhSaVQtJ6lBSBqVvxs",
  authDomain: "my-store-ad4c3.firebaseapp.com",
  projectId: "my-store-ad4c3",
  storageBucket: "my-store-ad4c3.appspot.com",
  messagingSenderId: "916363970867",
  appId: "1:916363970867:web:562d792705aa1614ca1646"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const auth =getAuth()
export const signInWithGooglePopup = () =>signInWithPopup(auth,provider)
export const db=getFirestore()

export const addCollectionAndDocuments = async (

    collectionKey,
    objectsToAdd
) =>{
    const collectionRef = collection(db,collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object)=>{

        const docRef = doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef,object)
    })

    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocuments=async()=>{
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const {title,items} = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    },{})
    return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth,additionalInfo={}) => {
    const userDocRef=doc(db,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(error){
            console.log('error creating the user',error.message)
        }
    }
    return userDocRef
}

export const createuserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInwithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser = async()=>await signOut(auth)

export const onAuthStateChangedUser=(callback)=>onAuthStateChanged(auth,callback)