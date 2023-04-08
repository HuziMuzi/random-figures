import React from 'react';

export type ContextType = {
  isAuth: boolean;
  logout: () => void;
  authorize: () => void;
};

const Context = React.createContext<ContextType>({} as ContextType);

export default Context;
