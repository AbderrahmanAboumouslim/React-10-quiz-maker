import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, isModalOpen, questions, correct } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>congratulations !!</h2>
        <p>
          You have made {((correct / questions.length) * 100).toFixed(0)}% of
          correct answers
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
