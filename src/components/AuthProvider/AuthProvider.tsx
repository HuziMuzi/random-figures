import React, {useCallback, useState} from 'react';
import Context from './context';

type AuthProviderPropsType = {
  children: React.ReactNode;
};

export const AuthProvider = ({children}: AuthProviderPropsType) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const authorize = useCallback(() => setIsAuth(true), []);
  const logout = () => setIsAuth(false);
  const startFetching = () => setIsFetching(true);
  const stopFetching = () => setIsFetching(false);

  const value = {isAuth, authorize, logout, isFetching, startFetching, stopFetching};

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
