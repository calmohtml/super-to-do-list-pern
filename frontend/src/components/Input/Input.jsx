import React, { useState } from "react";

export const Input = () => {
  const [description, setDescription] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="form__container">
      <header className="form__header">
        <h1>To-Do List</h1>
      </header>
      <form action="" id="form" className="form" onSubmit={submitHandler}>
        <div className="form__input--container">
          <input
            type="text"
            name="input"
            id="input"
            className="form__input"
            placeholder="Create a new To-Do..."
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <button type="submit" className="form__button">
            +
          </button>
        </div>
      </form>
    </main>
  );
};
