import ShowArea from "./components/editor/showArea";
import InputArea from "./components/editor/inputArea";
import TextProvider from "./contexts/textContext";

function App() {
  return (
    <div className="h-full flex gap-4 p-4">
      <TextProvider>
        <div className="flex-1">
          <InputArea />
        </div>
        <div className="flex-1">
          <ShowArea />
        </div>
        <div className="flex-1">1</div>
      </TextProvider>
    </div>
  );
}

export default App;
