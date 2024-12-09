import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import React, { createContext, useState } from "react";
import { auth } from "../assets/FireBase/Firebase.config";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  const createUser = (email, password) => {
    return signInWithEmailAndPassword(email, password, auth);
  };

  const authInfo = {
    isDark,
    toggleTheme,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
