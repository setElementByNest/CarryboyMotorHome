"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface PriceContextType {
  finalPrice: number;
  totalPrice: number;
  totalAdditionalCosts: number;
  setFinalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalAdditionalCosts: React.Dispatch<React.SetStateAction<number>>;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export const PriceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalAdditionalCosts, setTotalAdditionalCosts] = useState<number>(0);

  return (
    <PriceContext.Provider
      value={{
        finalPrice,
        totalPrice,
        totalAdditionalCosts,
        setFinalPrice,
        setTotalPrice,
        setTotalAdditionalCosts,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error("usePrice must be used within a PriceProvider");
  }
  return context;
};
