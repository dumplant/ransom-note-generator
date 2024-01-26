import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import SliderGroup from "./components/sliderGroup";
import ColorSelect from "./components/colorSelect";
import FontSelect from "./components/fontSelect";
import PaperSelect from "./components/paperSelect";

const EditorArea = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <>
      <PaperSelect />
      <SliderGroup
        title="内边距 padding"
        style={style}
        setStyle={setStyle}
        attr="padding"
      />
      <SliderGroup
        title="外边距 margin"
        style={style}
        setStyle={setStyle}
        attr="margin"
      />
      <SliderGroup
        title="旋转 rotate"
        style={style}
        setStyle={setStyle}
        attr="rotate"
      />
      <SliderGroup
        title="水平平移 translateX"
        style={style}
        setStyle={setStyle}
        attr="translateX"
      />
      <SliderGroup
        title="垂直平移 translateY"
        style={style}
        setStyle={setStyle}
        attr="translateY"
      />
      <ColorSelect />
      <FontSelect />
    </>
  );
};

export default EditorArea;
