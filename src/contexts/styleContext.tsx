import { colorPalette } from "@/config/StyleConfig";
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
  background: {
    color: keyof typeof colorPalette;
  };
  fontFamily: { [key: string]: boolean };
  paper: string;
  paperSize: {
    width: number;
    height: number;
  };
  ignoreSpace: boolean;
  slashSeparator: boolean;
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
    background: {
      color: "Wisdom",
    },
    fontFamily: {
      SimSun: true,
      SimHei: true,
      "Microsoft Yahei": true,
      "Microsoft JhengHei": true,
      KaiTi: true,
      NSimSun: true,
      FangSong: true,
    },
    paper: "white-paper",
    paperSize: {
      width: 600,
      height: 400,
    },
    ignoreSpace: true,
    slashSeparator: false,
  });

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {props.children}
    </StyleContext.Provider>
  );
};

export default StyleProvider;
