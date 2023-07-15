import React, { createContext, useContext, useState } from 'react';

type Userinfo = {
  username: string;
  token: string;
}

// Create a context
export const UserinfoContext = createContext<[Userinfo, React.Dispatch<React.SetStateAction<Userinfo>>]>({});

// Create a provider component
export const UserinfoProvider: React.FC = ({ children }) => {
  const state = useState<Userinfo>({
    username: '',
    token: '',
  });
  return <UserinfoContext.Provider value={state}>{children}</UserinfoContext.Provider>;
};

// Create a hook to use the context
export const useUserinfo = () => {
  const context = useContext(UserinfoContext);
  if (context === undefined) {
    throw new Error('useSharedVariable must be used within a SharedVariableProvider');
  }
  return context;
};
