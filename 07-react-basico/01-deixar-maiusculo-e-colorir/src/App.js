import "./App.css";
import { TextForEdit, TextContent } from "./components/TextForEdit/TextForEdit";
import TextTypeSelector from "./components/TextTypeSelector/TextTypeSelector";
import ColorPicker from "./components/ColorPicker/ColorPicker";

function App() {
  return (
    <div className="app">
      <TextForEdit />
      <TextTypeSelector text={TextContent} />
      <ColorPicker colors={["red", "blue", "green", "purple"]} />
    </div>
  );
}

export default App;
