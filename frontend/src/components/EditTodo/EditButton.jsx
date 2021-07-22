import React, { useState, Fragment } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export const EditButton = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  //update
  const updateDescription = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };
  //update

  return (
    <Fragment>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
        shouldCloseOnOverlayClick={false}
        className="modal__container"
      >
        <div id={`id${todo.todo_id}`} className="modal">
          <div className="modal__component modal__input">
            <h1>Edit To-Do</h1>
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="modal__component modal__buttons">
            <button
              onClick={(event) => {
                updateDescription(event);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Quit
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
