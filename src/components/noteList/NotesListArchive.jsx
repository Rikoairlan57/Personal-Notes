import React from "react";
import NoteItem from "../noteItem/NoteItem";

const NotesListArchive = ({ notes, onDelete, onArchive, searchKeyword }) => {
  const filteredNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().replace(/\s+/g, "").includes(searchKeyword)
  );

  const archivedNotes =
    filteredNotes.length > 0 ? (
      filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          date={note.createdAt}
          body={note.body}
          archived={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))
    ) : (
      <p className="notes-list__empty-message">File not found</p>
    );

  return (
    <div>
      <h2>Notes Archive</h2>
      <div className="notes-list">{archivedNotes}</div>
    </div>
  );
};

export default NotesListArchive;
