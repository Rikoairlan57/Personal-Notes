import React from "react";
import "./ButtonStyle.css";

const ArchiveButton = ({ id, onArchive, archived }) => {
  const button = () => {
    if (!archived) {
      return (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Archive
        </button>
      );
    } else {
      return (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Move
        </button>
      );
    }
  };
  return button();
};

export default ArchiveButton;
