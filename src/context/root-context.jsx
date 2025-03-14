"use client";
import React, {
  createContext,
  useContext,
  useState,
} from "react";

const RootContext = createContext(undefined);

export const RootProvider = ({ children }) => {
    // const [user, setUser] = useState(fetchUser());
  // useEffect(() => {
  //   const storedUser = fetchUser();
  //   if (storedUser) {
  //     setUser(storedUser);
  //   }
  // }, []);

  return (
    <RootContext.Provider
      value={{
         // user, setUser
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context)
    throw new Error("useRootContext must be used within a RootProvider");
  return context;
};
