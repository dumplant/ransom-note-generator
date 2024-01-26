import React, { useContext } from "react";
import classes from "./letterPaper.module.css";
import { cn } from "@/lib/utils";
import { StyleContext } from "@/contexts/styleContext";

const LetterPaper = ({ children }: { children: React.ReactNode[] }) => {
  const ctx = useContext(StyleContext);
  const { style } = ctx!;
  return (
    <div
      style={{
        width: style.paperSize.width + "rem",
        height: style.paperSize.height + "rem",
      }}
      className={cn(classes[style.paper], classes.paper)}
    >
      {children}
    </div>
  );
};

export default LetterPaper;
