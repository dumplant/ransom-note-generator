import React, { createContext, useState } from "react";

interface Style {
  padding: {
    value: number;
    randomness: number;
  };
}

export const StyleContext = createContext<{
  style: Style | null;
  setStyle: (style: Style | null) => void;
} | null>(null);

const StyleProvider: React.FC<{
  children: React.ReactNode | React.ReactNode;
}> = (props) => {
  const [style, setStyle] = useState<Style | null>(null);

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {props.children}
    </StyleContext.Provider>
  );
};

export default StyleProvider;
