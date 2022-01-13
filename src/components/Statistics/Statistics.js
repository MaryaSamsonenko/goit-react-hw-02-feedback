import PropTypes from "prop-types";
export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li key="good">Good: {good}</li>
      <li key="neutral">Neutral: {neutral}</li>
      <li key="bad">Bad: {bad}</li>
      <li key="total">Total: {total}</li>
      <li key="percent">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persent: PropTypes.number.isRequired,
};
