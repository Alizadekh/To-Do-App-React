import React from "react";
import style from "../List/List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function List({ items, handleDelete }) {
  return (
    <div className={style.allItems}>
      {items.map((value, index) => (
        <div className={`${style.item} fadeIn`} key={index}>
          <p>{value}</p>
          <div className={style.btns}>
            <button onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>{" "}
            <button>
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
