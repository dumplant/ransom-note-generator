import { TextContext } from "@/contexts/textContext";
import { useContext } from "react";

const ShowArea = () => {
  const ctx = useContext(TextContext);
  const { text } = ctx!;
  return <div>{text}</div>;
};

export default ShowArea;
