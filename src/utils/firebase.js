
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcxtY_J6rEsYuNrYXMDsgjXA2dSAr8z8A",
  authDomain: "project-success-1b72b.firebaseapp.com",
  projectId: "project-success-1b72b",
  storageBucket: "project-success-1b72b.appspot.com",
  messagingSenderId: "545954352922",
  appId: "1:545954352922:web:f6560b8090b1e0b7cba6a3",
  measurementId: "G-4LFHPJJYGE"
};

const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export function sign_out() {
  return signOut(auth).then().catch();
}

export function create_user_with_email_and_password({email, password}) {
    return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    return user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
export function sign_in_with_email_and_password({email, password}) {
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    return errorMessage
  });

}

const provider = new GoogleAuthProvider();


export function sign_in_with_popup() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
}







