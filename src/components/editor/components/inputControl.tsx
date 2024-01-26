import { Switch } from "@/components/ui/switch";
import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";

const InputControl = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-1">
        <div className="mb-4">忽略空格 ignore space: </div>
        <Switch
          checked={style.ignoreSpace}
          onCheckedChange={() =>
            setStyle({
              ...style,
              ignoreSpace: !style.ignoreSpace,
            })
          }
        />
      </div>
      <div className="flex-1">
        <div className="mb-4">"/"分隔 slash separator </div>
        <Switch
          checked={style.slashSeparator}
          onCheckedChange={() =>
            setStyle({
              ...style,
              slashSeparator: !style.slashSeparator,
            })
          }
        />
      </div>
    </div>
  );
};

export default InputControl;
