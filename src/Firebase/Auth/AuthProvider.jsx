import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create Users
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login users
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out users
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // manage users
  useEffect(() => {
    const unSubscribedUsers = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribedUsers();
    };
  }, []);


  console.log(user);

  const authInfo = {
    user,
    createUser,
    login,
    logOut,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
};

export default AuthProvider;
