import "./button.css";

const STYLES = ["bg-web-green", "bg-web-blue-dark", "bg-web-red"];

export const ButtonMain = ({ children, buttonColor }) => {
  const checkButtonColor = STYLES.includes(buttonColor)
    ? buttonColor
    : STYLES[1];
  return (
    <button
      className={`px-6 py-3 mt-6 text-white rounded-full ${checkButtonColor}`}
    >
      {children}
    </button>
  );
};
