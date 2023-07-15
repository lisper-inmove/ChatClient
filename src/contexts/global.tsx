import React, { createContext, useContext, useState } from 'react';

type Chitchat = {
  id: string;
  name: string;
  description: string;
}

// Define the type for the shared state
type SharedState = {
  chitchat?: Chitchat;
};

// Create a context
export const SharedVariableContext = createContext<[SharedState, React.Dispatch<React.SetStateAction<SharedState>>]>({});

// Create a provider component
export const SharedVariableProvider: React.FC = ({ children }) => {
  const state = useState<SharedState>({
    curChitchat: {
      id: '', name: '', description: '',
    }
  });
  return <SharedVariableContext.Provider value={state}>{children}</SharedVariableContext.Provider>;
};

// Create a hook to use the context
export const useSharedVariable = () => {
  const context = useContext(SharedVariableContext);
  if (context === undefined) {
    throw new Error('useSharedVariable must be used within a SharedVariableProvider');
  }
  return context;
};

