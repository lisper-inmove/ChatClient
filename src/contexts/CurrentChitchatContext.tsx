import React, { createContext, useContext, useState, ReactNode } from 'react';

type Chitchat = {
  id: string;
  name: string;
  description: string;
  type: string;
}

// Create a context
export const CurrentChitchatContext = createContext<[Chitchat, React.Dispatch<React.SetStateAction<Chitchat>>]>([{
  id: '',
  name: '',
  description: '',
  type: '',
}, () => {},
]);

type CurrentChitchatProviderProps = {
  children: ReactNode;
}

// Create a provider component
export const CurrentChitchatProvider: React.FC<CurrentChitchatProviderProps> = ({ children }) => {
  const state = useState<Chitchat>({
    id: '', 
    name: '',
    description: '',
    type: '',
  });
  return <CurrentChitchatContext.Provider value={state}>{children}</CurrentChitchatContext.Provider>;
};

// Create a hook to use the context
export const useCurrentChitchat = () => {
  const context = useContext(CurrentChitchatContext);
  if (context === undefined) {
    throw new Error('useSharedVariable must be used within a SharedVariableProvider');
  }
  return context;
};
