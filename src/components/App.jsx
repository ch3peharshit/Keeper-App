import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  function noteAdd(title, content) {
    const noteObj = { noteTitle: title, noteContent: content };
    setNote((prevValue) => {
      return [...prevValue, noteObj];
    });
  }
  function handleDelete(id) {
    setNote(note.filter((element, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea noteAdd={noteAdd} />
      {note.map((element, index) => {
        return (
          <Note
            handleDelete={() => {
              handleDelete(index);
            }}
            title={element.noteTitle}
            content={element.noteContent}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
