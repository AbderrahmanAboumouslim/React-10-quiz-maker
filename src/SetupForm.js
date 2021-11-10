import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleSubmit, handleChange, fail } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Create quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">How many questions ?</label>
            <input
              className="form-input"
              type="number"
              name="amount"
              id="amount"
              min={1}
              max={50}
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
              <option value="celebrities">celebrities</option>
              <option value="animals">animals</option>
              <option value="vehicles">vehicles</option>
              <option value="geography">geography</option>
              <option value="art">art</option>
            </select>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {fail && (
            <p className="error">
              oops! something went wrong. Please try other options
            </p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            START
          </button>
        </form>
      </section>
    </main>
  );
};
export default SetupForm;
