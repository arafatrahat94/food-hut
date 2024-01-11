import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../FireBase/FireBase";
import axios from "axios";
import { ServerUrl } from "../Utilities/Server/Url";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const url = ServerUrl;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createNew = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const gLogin = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  const login = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const forgetPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser?.email) {
        axios
          .get(url + `User?email=${currentUser.email}`)
          .then((res) => setUser(res?.data));
        setTimeout(() => {
          axios
            .get(url + `User?email=${currentUser.email}`)
            .then((res) => setUser(res?.data));
        }, 5000);
      }
    });
    return () => unSub();
  }, [url]);
  console.log(user);
  const authData = {
    user,
    createNew,
    loading,
    gLogin,
    login,
    forgetPass,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
