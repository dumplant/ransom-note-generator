import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import { Input } from "@/components/ui/input";

const PaperSizeControl = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <div className="mb-8">
      <div className="mb-4">纸张大小</div>
      <div className="flex gap-2 items-center">
        <span className="w-22">宽度 width</span>
        <Input
          value={style.paperSize.width}
          onChange={(e) => {
            setStyle({
              ...style,
              paperSize: {
                ...style.paperSize,
                width: Number(e.target.value),
              },
            });
          }}
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="w-22">高度 height</span>
        <Input
          value={style.paperSize.height}
          onChange={(e) => {
            setStyle({
              ...style,
              paperSize: {
                ...style.paperSize,
                height: Number(e.target.value),
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default PaperSizeControl;
