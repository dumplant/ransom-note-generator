import { colorPalette } from "@/config/StyleConfig";
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
            background: getRandomBackground(style.background.color),
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
            margin: getRandomValue(style.margin.value, style.margin.randomness),
          }}
          className={`inline-block `}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default ShowArea;

function getRandomValue(value: number, randomness: number, suffix?: string) {
  let min = randomness * -1;
  let max = randomness;
  if (suffix === "deg") {
    return value + Math.floor(Math.random() * (max - min + 1)) + min + suffix;
  }
  return value + Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTranslateValue(
  translateX: number,
  translateY: number,
  randomnessX: number,
  randomnessY: number
) {
  let minX = randomnessX * -1;
  let maxX = randomnessX;
  let randomTranslateX =
    translateX + Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  let minY = randomnessY * -1;
  let maxY = randomnessY;
  let randomTranslateY =
    translateY + Math.floor(Math.random() * (maxY - minY + 1)) + minY;
  return `${randomTranslateX}px ${randomTranslateY}px`;
}

function getRandomBackground(name: keyof typeof colorPalette) {
  const palette = colorPalette[name];
  return palette[Math.floor(Math.random() * palette.length)];
}
