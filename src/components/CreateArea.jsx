import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setShow] = useState(false);
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleContent(e) {
    setContent(e.target.value);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(e) => {
          props.noteAdd(title, content);
          setTitle("");
          setContent("");
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={title}
          onClick={() => {
            setShow(true);
          }}
          onChange={handleTitle}
        />
        <Zoom in={isExpanded}>
          <textarea
            name="content"
            value={content}
            placeholder="Take a note..."
            onChange={handleContent}
            rows={isExpanded ? 3 : 0}
          />
        </Zoom>
        <Zoom in={true}>
          <Fab type="submit">
            <AddIcon
              onClick={() => {
                setShow(false);
              }}
            />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
