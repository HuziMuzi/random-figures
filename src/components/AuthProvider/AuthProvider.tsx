import React, {useState} from 'react';
import Context from './context';

type AuthProviderPropsType = {
  children: React.ReactNode;
};

export const AuthProvider = ({children}: AuthProviderPropsType) => {
  const [isAuth, setIsAuth] = useState(false);
  const authorize = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  const value = {isAuth, authorize, logout};

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
