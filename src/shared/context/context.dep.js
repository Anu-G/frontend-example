import { createContext, useContext } from "react";

export const DepContext = createContext({});

export const DepProvider = ({ children, service }) => (
   <DepContext.Provider value={service}>
      {children}
   </DepContext.Provider>
);

export const useDep = _ => useContext(DepContext);