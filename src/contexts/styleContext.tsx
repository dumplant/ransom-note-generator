import React, { createContext, useState } from "react";

export interface Style {
  padding: {
    value: number;
    randomness: number;
  };
  margin: {
    value: number;
    randomness: number;
  };
  rotate: {
    value: number;
    randomness: number;
  };
  translateX: {
    value: number;
    randomness: number;
  };
  translateY: {
    value: number;
    randomness: number;
  };
}

export const StyleContext = createContext<{
  style: Style;
  setStyle: (style: Style) => void;
} | null>(null);

const StyleProvider: React.FC<{
  children: React.ReactNode | React.ReactNode;
}> = (props) => {
  const [style, setStyle] = useState<Style>({
    padding: {
      value: 10,
      randomness: 10,
    },
    margin: {
      value: 10,
      randomness: 10,
    },
    rotate: {
      value: 10,
      randomness: 10,
    },
    translateX: {
      value: 10,
      randomness: 10,
    },
    translateY: {
      value: 10,
      randomness: 10,
    },
  });

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {props.children}
    </StyleContext.Provider>
  );
};

export default StyleProvider;
