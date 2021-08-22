import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1 value={props.title}>{props.title}</h1>
      <p value={props.content}>{props.content}</p>
      <button
        onClick={() => {
          props.handleDelete(props.title);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
