import ShowArea from "./components/editor/showArea";
import InputArea from "./components/editor/inputArea";
import TextProvider from "./contexts/textContext";
import EditorArea from "./components/editor/editArea";
import StyleProvider from "./contexts/styleContext";

function App() {
  return (
    <div className="min-h-screen flex gap-4 p-4">
      <TextProvider>
        <StyleProvider>
          <div className="flex-1">
            <InputArea />
          </div>
          <div className="flex-1">
            <ShowArea />
          </div>
          <div className="flex-1">
            <EditorArea />
          </div>
        </StyleProvider>
      </TextProvider>
    </div>
  );
}

export default App;
