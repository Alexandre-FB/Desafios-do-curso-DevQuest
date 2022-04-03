import "./Button.css";

const Button = ({ label }) => {
  function showLabel() {
    alert(`A label desse botão é "${label}"`);
  }

  return <button onClick={showLabel}>{label}</button>;
};

export default Button;
