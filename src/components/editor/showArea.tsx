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
    <div className="h-full w-full   rounded-md border border-input bg-background px-3 py-2">
      {Array.from(text).map((char, index) => (
        <div
          key={index}
          style={{
            padding: getRandomValue(
              style.padding.value,
              style.padding.randomness
            ),
          }}
          className={`inline-block bg-stone-200`}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default ShowArea;

function getRandomValue(value: number, randomness: number) {
  let min = randomness * -1;
  let max = randomness;

  return value + Math.floor(Math.random() * (max - min + 1)) + min;
}
