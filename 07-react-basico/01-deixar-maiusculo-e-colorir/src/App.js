import "./App.css";
import { TextForEdit, TextContent } from "./components/TextForEdit/TextForEdit";
import TextTypeSelector from "./components/TextTypeSelector/TextTypeSelector";
import ColorPicker from "./components/ColorPicker/ColorPicker";

function App() {
  return (
    <div className="app">
      <TextForEdit />
      <TextTypeSelector text={TextContent} />
      <ColorPicker colors={["#dd006f", "#008DDD", "#00dd0f", "#8500dd"]} />
    </div>
  );
}

export default App;
