import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // update feedback when a button is clicked [feedback] - computed property - means particular feedback (good, bad or neutral)
  const handleIncrement = ([feedback]) => {
    setFeedback((prev) => ({ ...prev, [feedback]: prev[feedback] + 1 }));
  };

  // display the total number of feedbacks
  const calculateTotal = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const calculatePercentage = () => {
    const { good } = feedback;
    const total = calculateTotal;

    // if total is greate than 0, return positive %, else 0
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;
  const options = ["good", "neutral", "bad"];
  const total = calculateTotal();

  return (
    <div>
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics:">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={calculateTotal}
            percentage={calculatePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
