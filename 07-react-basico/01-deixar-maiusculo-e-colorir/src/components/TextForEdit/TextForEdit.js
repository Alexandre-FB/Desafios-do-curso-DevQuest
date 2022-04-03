import "./TextForEdit.css";

const TextContent = "Eu sou um texto. Estilize-me!";

const TextForEdit = () => {
  return (
    <div>
      <h1 className="textForEdit">{TextContent}</h1>
    </div>
  );
};

export { TextForEdit, TextContent };
