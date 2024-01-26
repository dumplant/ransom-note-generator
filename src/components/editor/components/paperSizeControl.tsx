import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import { Input } from "@/components/ui/input";

const PaperSizeControl = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <div className="mb-8">
      <div className="mb-4 font-semibold">纸张大小 paper size</div>
      <div className="flex gap-4 items-center mb-2">
        <span className="w-22">宽度 width</span>
        <Input
          className="w-20"
          value={style.paperSize.width}
          onChange={(e) => {
            const number = Number.isNaN(Number(e.target.value))
              ? 18
              : Number(e.target.value);
            setStyle({
              ...style,
              paperSize: {
                ...style.paperSize,
                width: number,
              },
            });
          }}
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="w-22">高度 height</span>
        <Input
          className="w-20"
          value={style.paperSize.height}
          onChange={(e) => {
            const number = Number.isNaN(Number(e.target.value))
              ? 30
              : Number(e.target.value);
            setStyle({
              ...style,
              paperSize: {
                ...style.paperSize,
                height: number,
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default PaperSizeControl;
