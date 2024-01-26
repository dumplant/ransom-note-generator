import { fontFamily } from "@/config/StyleConfig";
import { getRandomColor, getRandomFont, getRandomValue } from "@/lib/utils";
import { ArrowBigDown } from "lucide-react";

const HeaderArea = () => {
  const text = [
    "type",
    "here",
    <ArrowBigDown />,
    "创建你的勒索信风格字条",
    "generate your ransom-style note",
  ];

  return (
    <div className="ml-2 flex gap-2 h-full items-center">
      {text.map((char, index) => {
        const { bgColor, color } = getRandomColor("Wisdom");
        return (
          <div
            key={index}
            style={{
              fontFamily: getRandomFont(fontFamily),
              background: bgColor,
              color: color,
              margin: getRandomValue(5, 5),
            }}
            className="inline-block relative"
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderArea;
