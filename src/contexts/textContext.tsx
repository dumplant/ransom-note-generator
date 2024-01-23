import React, { createContext, useState } from "react";

export const TextContext = createContext<{
  text: string;
  setText: (text: string) => void;
} | null>(null);

const TextProvider: React.FC<{
  children: React.ReactNode[] | React.ReactNode;
}> = (props) => {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={{ text, setText }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextProvider;
