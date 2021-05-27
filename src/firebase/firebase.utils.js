import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ0KIxexb3ox6-4ukN6lSqC0GN99I6Er8",
    authDomain: "shop-db-d997f.firebaseapp.com",
    projectId: "shop-db-d997f",
    storageBucket: "shop-db-d997f.appspot.com",
    messagingSenderId: "926245925457",
    appId: "1:926245925457:web:3849538dfc6e36462c7e70",
    measurementId: "G-E9VRZKM20Y"
};


export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userReference = firestore.doc(`users/${userAuth.uid}`); // this pulls the document
    const snapshot = await userReference.get(); // this returns a snapshot of the data in the document
    
    // check if the data exists in the database, if not, add it:
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userReference.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userReference;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;