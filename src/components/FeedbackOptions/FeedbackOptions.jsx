import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonSection}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(["good", "neutral", "bad"]))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};