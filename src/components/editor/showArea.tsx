import { StyleConfig } from "@/config/StyleConfig";
import { StyleContext } from "@/contexts/styleContext";
import { TextContext } from "@/contexts/textContext";
import { useContext } from "react";

const ShowArea = () => {
  const textCtx = useContext(TextContext);
  const { text } = textCtx!;
  const styleCtx = useContext(StyleContext);
  const { style } = styleCtx!;
  return (
    <div className="h-full w-full rounded-md border border-input bg-background px-3 py-2">
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          className={`bg-stone-200 ${
            StyleConfig["padding"][
              style?.padding.value! +
                Math.floor(Math.random() * style?.padding.randomness!)
            ]
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default ShowArea;
