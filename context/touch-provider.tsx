"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";

const TouchContext = createContext<boolean | undefined>(undefined);

export const useTouch = () => useContext(TouchContext);

export const TouchProvider = (props: PropsWithChildren) => {
  const [isTouch, setTouch] = useState<boolean>();

  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return <TouchContext.Provider value={isTouch} {...props} />;
};
