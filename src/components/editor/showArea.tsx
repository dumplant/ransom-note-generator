import { TextContext } from "@/contexts/textContext";
import { useContext } from "react";

const ShowArea = () => {
  const ctx = useContext(TextContext);
  const { text } = ctx!;

  return (
    <div className="h-full w-full rounded-md border border-input bg-background px-3 py-2">
      {Array.from(text).map((char) => (
        <span className="bg-stone-300 m-1">{char}</span>
      ))}
    </div>
  );
};

export default ShowArea;
