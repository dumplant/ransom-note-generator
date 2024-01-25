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
    <div className="flex gap-4 mb-8">
      <div className="flex-1">
        <div className="mb-4">{title} </div>
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
      </div>
      <div className="flex-1">
        <div className="mb-4">随机性 random </div>
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
    </div>
  );
};

export default SliderGroup;
