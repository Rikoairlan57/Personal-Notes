import React from "react";
import { showFormattedDate } from "../../utils";
import ArchiveButton from "../button/ArchiveButton";
import DeleteButton from "../button/DeleteButton";
import "./NoteItem.css";

const NoteItem = ({ id, onArchive, onDelete, title, date, body, archived }) => {
  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(date)}</p>
      <p className="note-item__body">{body}</p>
      <div className="note-item__action">
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default NoteItem;
