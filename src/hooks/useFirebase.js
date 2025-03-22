import { useEffect, useState } from "react";
import { 
  signInWithPopup,
  getRedirectResult,
  signInWithRedirect, 
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, 
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import firebaseInit from "../firebase/firebase.init";

const useFirebaseAuth = () => {
  firebaseInit();
  const [user, setUser] = useState(null); 
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async (usePopup = true) => {
    const provider = new GoogleAuthProvider();
    if (usePopup) {
      await signInWithPopup(auth, provider);
    } else {
      await signInWithRedirect(auth, provider);
    }
  };

  const signInWithFacebook = async (usePopup = true) => {
    const provider = new FacebookAuthProvider();
    if (usePopup) {
      await signInWithPopup(auth, provider);
    } else {
      await signInWithRedirect(auth, provider);
    }
  };

  const signInWithGitHub = async (usePopup = true) => {
    const provider = new GithubAuthProvider();
    if (usePopup) {
      await signInWithPopup(auth, provider);
    } else {
      await signInWithRedirect(auth, provider);
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await firebaseSignInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with email/password:", error);
    }
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      await firebaseCreateUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing up with email/password:", error);
    }
  };

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          setUser(result?.user);
        }
      } catch (error) {
        console.error("Error handling redirect:", error);
      }
    };

    handleRedirectResult();
  }, [auth]); 

  const signOut = () => {
    return auth.signOut();
  };

  return {
    user, 
    signInWithGoogle,
    signInWithFacebook,
    signInWithGitHub,
    signInWithEmailAndPassword, 
    signUpWithEmailAndPassword,
    signOut,
  };
};

export default useFirebaseAuth;

