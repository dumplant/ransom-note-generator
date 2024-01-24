import { Slider } from "@/components/ui/slider";
import { Style } from "@/contexts/styleContext";

const SliderGroup = ({
  title,
  style,
  setStyle,
  attr,
}: {
  title: string;
  style: Style;
  setStyle: (style: Style) => void;
  attr: string;
}) => {
  return (
    <div>
      <div>{title}: </div>
      <Slider
        defaultValue={[10]}
        max={20}
        step={1}
        onValueChange={(value) => {
          setStyle({
            ...style,
            [attr]: {
              ...style[attr as keyof Style]!,
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
            [attr]: {
              ...style[attr as keyof Style]!,
              randomness: value[0],
            },
          });
        }}
      />
    </div>
  );
};

export default SliderGroup;
