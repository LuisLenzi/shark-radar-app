"use client";

import { fakeSharkData } from "@/seed/shark-data";

import { SharkData } from "@/types/shark-data";

import { useState, useContext, createContext, PropsWithChildren } from "react";

interface SharkDataContextType {
  selectedShark: SharkData;
  handleSelectShark: (shark: SharkData) => void;
}

const SharkDataContext = createContext<SharkDataContextType>(
  {} as SharkDataContextType
);

export const useSharkData = () => useContext(SharkDataContext);

export const SharkDataProvider = (props: PropsWithChildren) => {
  const [selectedShark, setSelectedShark] = useState<SharkData>(
    fakeSharkData[0]
  );

  function handleSelectShark(shark: SharkData) {
    setSelectedShark(shark);
  }

  return (
    <SharkDataContext.Provider
      value={{ selectedShark, handleSelectShark }}
      {...props}
    />
  );
};
