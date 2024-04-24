'use client'
import React, { createContext, useContext, useState } from "react";

interface CounterContextProps {
  count: number;
  increment: () => void;
  descrement: () => void;
}

const CountContext = createContext<CounterContextProps>({
  count: 0,
  increment: () => {},
  descrement: () => {},
});
;

export const CountProvider = ({ children }: any) => {
  const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};

const descrement = () => {
  setCount(count - 1);
};


  return (
    <CountContext.Provider value={{ count, increment, descrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
