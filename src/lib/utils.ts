import { colorPalette } from "@/config/StyleConfig";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomValue(
  value: number,
  randomness: number,
  suffix?: string
) {
  let min = randomness * -1;
  let max = randomness;
  if (suffix === "deg") {
    return value + Math.floor(Math.random() * (max - min + 1)) + min + suffix;
  }
  return value + Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomTranslateValue(
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

export function getRandomColor(name: keyof typeof colorPalette) {
  const palette = colorPalette[name];
  const bgColor = palette[Math.floor(Math.random() * palette.length)];
  return {
    bgColor: bgColor,
    color: pickTextColorBasedOnBgColorAdvanced(bgColor, "#efefef", "#1e1e1e"),
  };
}

export function pickTextColorBasedOnBgColorAdvanced(
  bgColor: string,
  lightColor: string,
  darkColor: string
) {
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? darkColor : lightColor;
}

export function getRandomFont(
  fontFamily: { [key: string]: boolean } | string[]
) {
  if (Array.isArray(fontFamily)) {
    return fontFamily[Math.floor(Math.random() * fontFamily.length)];
  }
  const filteredFamily = Object.keys(fontFamily).filter((v) => fontFamily[v]);
  return filteredFamily[Math.floor(Math.random() * filteredFamily.length)];
}
