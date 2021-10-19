import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../componets/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
    });
  };

  //observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};
export default useFirebase;
