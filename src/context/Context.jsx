import React, { createContext, useContext, useCallback, useState } from "react";

const LocationContext = createContext();

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ page: "list", params: { id: 1 } });

  const changeLocation = useCallback((page, params) => {
    setLocation({ page, params: params || {} });
  }, []);

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
