import React from 'react';

export type ContextType = {
  isAuth: boolean;
  isFetching: boolean;
  logout: () => void;
  authorize: () => void;
  startFetching: () => void;
  stopFetching: () => void;
};

const Context = React.createContext<ContextType>({} as ContextType);

export default Context;
