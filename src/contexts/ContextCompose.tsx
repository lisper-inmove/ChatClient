import React from 'react';

import { CurrentChitchatProvider } from './CurrentChitchatContext';
import { UserinfoProvider } from './UserinfoContext';

export const ContextCompose: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <UserinfoProvider>
    <CurrentChitchatProvider>
      { children }
    </CurrentChitchatProvider>
    </UserinfoProvider>
  );
}
