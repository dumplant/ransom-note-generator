import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colorPalette, paperConfig } from "@/config/StyleConfig";
import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import classes from "./letterPaper.module.css";
import { cn } from "@/lib/utils";

const PaperSelect = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <div className="mb-8">
      <div className="mb-4 font-semibold">信纸样式 paper style</div>
      <Select
        value={style.paper}
        onValueChange={(value: keyof typeof colorPalette) => {
          setStyle({
            ...style,
            paper: value,
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="choose a paper" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {paperConfig.map((p) => (
              <SelectItem value={p} key={p}>
                <div className="flex items-center">
                  <span className="mr-2">{p}</span>
                  <div className={cn(classes[p + "-sm"], "w-5 h-5")}></div>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaperSelect;
