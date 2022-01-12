export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li key="neutral">Neutral: {neutral}</li>
      <li key="bad">Bad: {bad}</li>
      <li key="good">Good: {good}</li>
      <li key="total">Total: {total}</li>
      <li key="percent">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};