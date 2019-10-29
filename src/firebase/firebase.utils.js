
import firebase from "firebase/app"

import "firebase/firestore"


import "firebase/auth"


const config = {
    apiKey: "AIzaSyDWvKZfY9jMT2XmJfFD_S632_FFg9EQrDM",
    authDomain: "crwn-db-b34ea.firebaseapp.com",
    databaseURL: "https://crwn-db-b34ea.firebaseio.com",
    projectId: "crwn-db-b34ea",
    storageBucket: "crwn-db-b34ea.appspot.com",
    messagingSenderId: "296865257264",
    appId: "1:296865257264:web:60dfbf5d0668d93f10daf5",
    measurementId: "G-7ZF6G1T1H9"
}

export const createUserProfileDocument = async (userAuth,additionalData)=> {
if(!userAuth) return ;

const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get() 

if(!snapShot.exists) {
    const {displayName, email} = userAuth 
    const createdAt = new Date() ;
try {
    await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
    })

} catch (error){
console.log(`error creating user`,error.message);

}

}
return userRef

}

firebase.initializeApp(config) ;

export const auth = firebase.auth() ;

export const firestore  =  firebase.firestore() ;

const provider = new firebase.auth.GoogleAuthProvider() ;

provider.setCustomParameters({prompt:"select_account"}) ;

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;