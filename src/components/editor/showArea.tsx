import { StyleContext } from "@/contexts/styleContext";
import { TextContext } from "@/contexts/textContext";
import { useContext } from "react";
import LetterPaper from "./components/letterPaper";
import {
  getRandomColor,
  getRandomFont,
  getRandomTranslateValue,
  getRandomValue,
} from "@/lib/utils";
const ShowArea = () => {
  const textCtx = useContext(TextContext);
  const { text } = textCtx!;
  const styleCtx = useContext(StyleContext);
  const { style } = styleCtx!;
  let filteredText = style.ignoreSpace ? text.replace(/\s*/g, "") : text;
  if (filteredText.endsWith("/")) {
    filteredText = filteredText.slice(0, -1);
  }
  const filteredTextArray = style.slashSeparator
    ? filteredText.split("/")
    : filteredText.split("");

  return (
    <div
      className={
        "h-full w-full rounded-md border border-input bg-background px-4 py-4"
      }
    >
      <LetterPaper>
        {filteredTextArray.map((char, index) => {
          if (!char.length) {
            return;
          }
          const { bgColor, color } = getRandomColor(style.background.color);
          return (
            <>
              <div
                key={index}
                style={{
                  fontFamily: getRandomFont(style.fontFamily),
                  background: bgColor,
                  color: color,
                  translate: getRandomTranslateValue(
                    style.translateX.value,
                    style.translateY.value,
                    style.translateX.randomness,
                    style.translateY.randomness
                  ),
                  rotate: getRandomValue(
                    style.rotate.value,
                    style.rotate.randomness,
                    "deg"
                  ) as string,
                  padding: getRandomValue(
                    style.padding.value,
                    style.padding.randomness
                  ),
                  margin: getRandomValue(
                    style.margin.value,
                    style.margin.randomness
                  ),
                }}
                className="inline-block relative"
              >
                {char}
              </div>
            </>
          );
        })}
      </LetterPaper>
    </div>
  );
};

export default ShowArea;
