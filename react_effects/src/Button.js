import PropsTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.prototype = {
  text: PropsTypes.string.isRequired,
};

export default Button;
