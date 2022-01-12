export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};
