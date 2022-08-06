import React from "react";
import NoteInput from "../noteInput/NoteInput";
import NotesListActive from "../noteList/NotesListActive";
import NotesListArchive from "../noteList/NotesListArchive";
import "./NoteBody.css";

const NoteBody = ({ notes, onDelete, onArchive, addNote, searchKeyword }) => {
  return (
    <main className="note-app__body">
      <NoteInput addNote={addNote} />
      <NotesListActive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        searchKeyword={searchKeyword}
      />
      <NotesListArchive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        searchKeyword={searchKeyword}
      />
    </main>
  );
};

export default NoteBody;
