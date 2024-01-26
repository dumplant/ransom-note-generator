import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colorPalette } from "@/config/StyleConfig";
import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";

const ColorSelect = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <div className="mb-8">
      <div className="mb-4">配色选择</div>
      <Select
        value={style.background.color}
        onValueChange={(value: keyof typeof colorPalette) => {
          setStyle({
            ...style,
            background: {
              color: value,
            },
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="choose a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.keys(colorPalette).map((p) => (
              <SelectItem value={p} key={p}>
                <div className="flex items-center">
                  <span className="mr-2">{p}</span>
                  {colorPalette[p as keyof typeof colorPalette].map((c) => (
                    <div
                      key={c}
                      style={{ background: c }}
                      className="w-2 h-2"
                    ></div>
                  ))}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ColorSelect;
