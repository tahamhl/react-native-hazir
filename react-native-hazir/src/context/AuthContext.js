import { createContext, useContext, useEffect, useReducer, useState } from "react";
import AuthReducer from '../reducers/AuthReducer';

const AuthContext = createContext(null);

const initialState = {
  isLoggedIn: false,
  userData: null,
  token: null
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  // Demo amaçlı otomatik oturum açma fonksiyonu
  const login = (email, password) => {
    // Gerçek uygulamada API çağrısı yapılacak yer
    dispatch({ 
      type: 'LOGIN_SUCCESS', 
      payload: {
        userData: { email, username: 'Kullanıcı' },
        token: 'demo-token'
      }
    });
  };

  // Oturumu kapatma fonksiyonu
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ 
      authState, 
      login, 
      logout,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;