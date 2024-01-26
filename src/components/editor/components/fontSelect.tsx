import { Badge } from "@/components/ui/badge";
import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FontSelect = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <>
      <div className="mb-4">
        <span className="font-semibold">字体 font family</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-4 h-6" variant="outline">
              ＋
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>字体选择</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.keys(style.fontFamily).map((f) => (
              <DropdownMenuCheckboxItem
                key={f}
                checked={style.fontFamily[f]}
                onCheckedChange={() => {
                  style.fontFamily[f] = !style.fontFamily[f];
                  setStyle({
                    ...style,
                    fontFamily: style.fontFamily,
                  });
                }}
              >
                {f}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        {Object.keys(style.fontFamily).map(
          (f) =>
            style.fontFamily[f] && (
              <Badge className="mr-2" key={f}>
                {f}
              </Badge>
            )
        )}
      </div>
    </>
  );
};

export default FontSelect;
