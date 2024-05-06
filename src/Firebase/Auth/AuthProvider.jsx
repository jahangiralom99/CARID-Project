import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
};

export default AuthProvider;
