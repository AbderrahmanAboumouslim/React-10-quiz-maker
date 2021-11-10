import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    lobby,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    correctAnswer,
  } = useGlobalContext();

  if (lobby) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  // const answers = [...incorrect_answers, correct_answer];
  let answers = [...incorrect_answers];
  const betaIndex = Math.floor(Math.random() * 4);
  if (betaIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[betaIndex]);
    answers[betaIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  className="answer-btn"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => correctAnswer(correct_answer === answer)}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
