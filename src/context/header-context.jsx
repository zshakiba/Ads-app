"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";


const HeaderContext = createContext(undefined);

export const HeaderProvider = ({
  children,
}) => {
  const [headerDes, setHeaderDes] = useState(undefined);

  return (
    <HeaderContext.Provider
      value={{
        headerDes,
        setHeaderDes,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context)
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  return context;
};
