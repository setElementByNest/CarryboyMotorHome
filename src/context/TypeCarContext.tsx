"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TypeCarContextType {
  typeCar: string;
  setTypeCar: React.Dispatch<React.SetStateAction<string>>;
  typeCar_list: string[][];
  typeGroup: string;
  setTypeGroup: React.Dispatch<React.SetStateAction<string>>;
  typeGroup_list: string[];
}

export const TypeCarContext = createContext<TypeCarContextType | undefined>(undefined);

export const typeCar_list = [["ALL", "TYPE-A", "TYPE-B"],[ "ALL", "TYPE-LA", "TYPE-LB"]];
export const typeGroup_list = ["ALL", "STANDARD", "EXTENDED"];

export const TypeCarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [typeCar, setTypeCar] = useState<string>(typeCar_list[0][0]);
  const [typeGroup, setTypeGroup] = useState<string>(typeGroup_list[0]);

  return (
    <TypeCarContext.Provider
      value={{
        typeCar,
        setTypeCar,
        typeCar_list,
        typeGroup,
        setTypeGroup,
        typeGroup_list,
      }}
    >
      {children}
    </TypeCarContext.Provider>
  );
};

export const useTypeCar = () => {
  const context = useContext(TypeCarContext);
  if (!context) {
    throw new Error("useTypeCar must be used within a TypeCarProvider");
  }
  return context;
};
