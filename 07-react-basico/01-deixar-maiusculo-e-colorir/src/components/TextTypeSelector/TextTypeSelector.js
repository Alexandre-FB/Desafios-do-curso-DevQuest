import "./TextTypeSelector.css";
import ReactDOM from "react-dom";

const TextTypeSelector = ({ text }) => {
  function transformUpperCaseText() {
    ReactDOM.render(text.toUpperCase(), document.querySelector(".textForEdit"));
  }

  function transformLowerCaseText() {
    ReactDOM.render(text.toLowerCase(), document.querySelector(".textForEdit"));
  }

  return (
    <div className="container">
      <h2 className="title">Escolha o tipo de texto</h2>
      <div className="buttonsContainer">
        <button className="btn" onClick={transformUpperCaseText}>
          {"MAIÚSCULO"}
        </button>
        <button className="btn" onClick={transformLowerCaseText}>
          {"minúsculo"}
        </button>
      </div>
    </div>
  );
};

export default TextTypeSelector;
