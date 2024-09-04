import React, { useEffect, useState } from "react";
import useStore from "../store/myStore";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoList() {
  const [txt, setTxt] = useState("");
  const { todo, createTodo, deleteTodo, setEdit, setTitle, setDone } =
    useStore();

  const hdlInput = (e) => {
    setTxt(e.target.value);
  };

  const hdlAddTodo = () => {
    createTodo(txt);
    toast.success(`Successfully Add ${txt}`);
    setTxt("");
  };

  const hdlDelete = (id, title) => {
    deleteTodo(id);
    toast.error(`Deleted ${title} !`);
  };

  const hdlEdit = (id, title, status) => {
    if (status) {
      toast.info(`Edited ${title}`);
    }
    setEdit(id);
  };

  const hdlEnter = (e, id, title, status) => {
    if (e.key === "Enter") {
      if (status) {
        toast.info(`Edited ${title}`);
      }
      setEdit(id);
    }
  };
  const hdlEditOnChange = (id, e) => {
    setTitle(id, e.target.value);
  };

  const hdlDone = (id, title, status) => {
    if (!status) {
      toast.success(`Done ${title}`);
    }
    setDone(id);
  };

  //   useEffect(() => {
  //     console.log(todo);
  //   }, [todo]);
  return (
    <div>
      <div className="mx-auto w-3/5">
        <h1>Todo List</h1>
        <div className="flex p-2 gap-2">
          <input
            type="text"
            className="flex-1 p-2"
            onChange={hdlInput}
            value={txt}
          />
          <button className="btn btn-primary" onClick={hdlAddTodo}>
            Add
          </button>
        </div>
        <div className="border rounded-md p-4">
          {todo.map((el) => (
            <div className="flex p-2">
              {/* <button className="btn">{el.title}</button>
          <button className="btn" onClick={() => hdlEdit(el.id, el.title)}>
            Edit
          </button> */}
              {el.editing ? (
                <>
                  <input
                    className="btn flex-1"
                    type="text"
                    value={el.title}
                    onChange={(e) => hdlEditOnChange(el.id, e)}
                    onKeyUp={(e) => hdlEnter(e, el.id, el.title, el.editing)}
                  />
                  <button
                    className="btn"
                    onClick={() => hdlEdit(el.id, el.title, el.editing)}
                  >
                    Close
                  </button>
                </>
              ) : el.done ? (
                <>
                  <button
                    className="btn line-through flex-1"
                    onClick={() => hdlDone(el.id, el.title, el.done)}
                  >
                    {el.title}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn flex-1"
                    onClick={() => hdlDone(el.id, el.title, el.done)}
                  >
                    {el.title}
                  </button>
                  <button
                    className="btn"
                    onClick={() => hdlEdit(el.id, el.title, el.editing)}
                  >
                    Edit
                  </button>
                </>
              )}
              <button
                className="btn"
                onClick={() => hdlDelete(el.id, el.title)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
