import React, { createContext, useContext, useState } from 'react';

// 1. 定义数据类型
type Userinfo = {
  username: string;
  token: string;
}

// 2. 定义Context
export const UserinfoContext = createContext<[Userinfo, React.Dispatch<React.SetStateAction<Userinfo>>]>([
  {
    username: '',
    token: ''
  }, 
  () => {}  // a fake set function
]);

// 3. 定义Provider
export const UserinfoProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const userinfo = useState<Userinfo>({
    username: '',
    token: '',
  });

  return <UserinfoContext.Provider value={userinfo}>{children}</UserinfoContext.Provider>;
};

// 4
export const useUserinfo = () => {
  const context = useContext(UserinfoContext);
  if (context === undefined) {
    throw new Error('useUserinfo must be used within a UserinfoProvider');
  }
  return context;
};
