import { Slider } from "@/components/ui/slider";
import { StyleConfig } from "@/config/StyleConfig";
import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";

const EditorArea = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <div>
      <div>内边距 padding: </div>
      <Slider
        defaultValue={[10]}
        max={20}
        step={1}
        onValueChange={(value) => {
          setStyle({
            ...style,
            padding: {
              ...style?.padding!,
              value: value[0],
            },
          });
        }}
      />
      <div>随机性 random: </div>
      <Slider
        defaultValue={[10]}
        max={20}
        step={1}
        onValueChange={(value) => {
          setStyle({
            ...style,
            padding: {
              ...style?.padding!,
              randomness: value[0],
            },
          });
        }}
      />
    </div>
  );
};

export default EditorArea;
