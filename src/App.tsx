import ShowArea from "./components/editor/showArea";
import InputArea from "./components/editor/inputArea";
import TextProvider from "./contexts/textContext";
import EditorArea from "./components/editor/editArea";
import StyleProvider from "./contexts/styleContext";
import HeaderArea from "./components/editor/headerArea";

function App() {
  return (
    <div>
      <div className="w-full h-14 bg-gray-900">
        <HeaderArea />
      </div>
      <div className="h-[calc(100vh-3.5rem)] flex gap-4 p-4">
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
            </div>{" "}
          </StyleProvider>
        </TextProvider>
      </div>
    </div>
  );
}

export default App;
