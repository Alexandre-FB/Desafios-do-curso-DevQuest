import "./ColorPicker.css";

const ColorPicker = (props) => {
  let colorText = (event) => {
    const nameSelectedColor = event.target.style.backgroundColor;
    document.querySelector(".textForEdit").style.color = nameSelectedColor;
  };

  return (
    <div className="container">
      <h2 className="title">Agora escolha uma cor</h2>
      <div className="containerColors">
        {props.colors.map((color, index) => {
          return (
            <button
              key={index}
              className="btn"
              style={{ backgroundColor: color }}
              onClick={colorText}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
