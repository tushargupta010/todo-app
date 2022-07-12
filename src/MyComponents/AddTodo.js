import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cann't be blank.");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label htmlFor="exampleInputTitle" class="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            class="form-control"
            id="exampleInputTitle"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputDesc" class="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            class="form-control"
            id="exampleInputDesc"
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
