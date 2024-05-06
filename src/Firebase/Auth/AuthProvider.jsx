import { getAuth } from "firebase/auth";
import {  createContext } from "react";
import app from "../Firebase";

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({Children}) => {



    const authInfo = {
        user,
        
    }



    return (
        <AuthContext.Provider  value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;