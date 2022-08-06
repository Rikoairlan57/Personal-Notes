import React from "react";
import { getInitialData } from "./utils/index";
import Navbar from "./components/navbar/Navbar";
import NoteBody from "./components/noteBody/NoteBody";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchKeywordHandler = this.onSearchKeywordHandler.bind(this);
  }

  // add notes
  onAddNoteHandler({ title, body, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived: false,
          },
        ],
      };
    });
  }

  // delete notes
  onDeleteHandler(id) {
    const filteredNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState(() => {
      return {
        notes: filteredNotes,
      };
    });
  }

  // move to archive notes
  onArchiveHandler(id) {
    const findNote = this.state.notes.find((note) => note.id === id);
    this.setState((prevState) => {
      const filteredNotes = prevState.notes.map((prevNote) =>
        prevNote.id === findNote.id
          ? { ...prevNote, archived: prevNote.archived === true ? false : true }
          : prevNote
      );
      return {
        notes: filteredNotes,
      };
    });
  }

  // search notes in active or archive notes
  onSearchKeywordHandler(keyword) {
    const filteredKeyword = keyword.toLowerCase().replace(/\s+/g, "");

    this.setState({ searchKeyword: filteredKeyword });
  }

  render() {
    return (
      <>
        <Navbar searchKeyword={this.onSearchKeywordHandler} />
        <NoteBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNote={this.onAddNoteHandler}
          searchKeyword={this.state.searchKeyword}
        />
      </>
    );
  }
}

export default App;
