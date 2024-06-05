import React, { useState } from "react";
import List from "../List/List";
import style from "../Todo/Todo.module.css";

function Todo() {
  const [element, setElement] = useState("");
  const [myarr, setMyarr] = useState([]);

  const handleChange = (e) => {
    setElement(e.target.value);
  };

  const addText = () => {
    setMyarr([...myarr, element]);
    setElement("");
  };

  const handleDelete = (index) => {
    let newArr = [...myarr];
    newArr.splice(index, 1);
    setMyarr(newArr);
    // console.log(newArr);
  };

  return (
    <div className={style.todo}>
      <h1 className={style.title}>What do you want to do?</h1>
      <div className={style.inputDiv}>
        <input value={element} onChange={handleChange} type='text' />
        <button onClick={addText}>Add</button>
      </div>
      <List items={myarr} handleDelete={handleDelete} />
    </div>
  );
}

export default Todo;
