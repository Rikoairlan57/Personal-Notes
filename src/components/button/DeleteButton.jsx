import React from "react";
import "./ButtonStyle.css";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
