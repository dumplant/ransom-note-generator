import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import SliderGroup from "./components/sliderGroup";

const EditorArea = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <SliderGroup
      title="内边距 padding"
      style={style}
      setStyle={setStyle}
      attr="padding"
    />
  );
};

export default EditorArea;
