import { Textarea } from "@/components/ui/textarea";
import { TextContext } from "@/contexts/textContext";
import { useContext } from "react";

const InputArea = () => {
  const ctx = useContext(TextContext);
  const { text, setText } = ctx!;

  return (
    <Textarea
      value={text}
      className="h-full"
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default InputArea;
