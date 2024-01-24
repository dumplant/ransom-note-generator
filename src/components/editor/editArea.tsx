import { StyleContext } from "@/contexts/styleContext";
import { useContext } from "react";
import SliderGroup from "./components/sliderGroup";

const EditorArea = () => {
  const ctx = useContext(StyleContext);
  const { style, setStyle } = ctx!;
  return (
    <>
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
    </>
  );
};

export default EditorArea;
