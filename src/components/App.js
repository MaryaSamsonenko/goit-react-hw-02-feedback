import React, { Component } from "react";
import propTypes from "prop-types";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  static defaultProps = {
    state: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
    step: 1,
  };
  state = this.props.state;

  onLeaveFeedback = (e) => {
    const key = e.target.textContent;
    this.setState((prevState) => {
      return { [key]: (prevState[key] += 1) };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => acc + state, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);
    const totalStats = this.countTotalFeedback();
    const positiveStats = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {totalStats > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={totalStats}
              positivePercentage={positiveStats}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </>
    );
  }
}
App.propTypes = {
  title: propTypes.string,
  options: propTypes.arrayOf(propTypes.string),
  onLeaveFeedback: propTypes.elementType,
  good: propTypes.number,
  bad: propTypes.number,
  neutral: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
  message: propTypes.string,
};
