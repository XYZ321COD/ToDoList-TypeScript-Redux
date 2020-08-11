import React, { useState } from "react";
import "../css/App.css";
import "../css/Note.css";
export interface NoteInterface {
  removeNote(note: string): void;
  acceptNote(note: string): void;
  name: string;
}

export const Note: React.FC<NoteInterface> = ({
  name,
  removeNote,
  acceptNote,
}) => {
  const [noteName, setName] = useState(name);
  const [color, setColor] = useState("#f0f7fb");
  const [colorBorder, setColorBorder] = useState("#3498db");
  const [accepted, setaccepted] = useState(false);

  const onAddNoteClick = () => {
    if (!accepted) {
      removeNote(noteName);
      setName("");
    }
  };

  return (
    <>
      <div
        className="row note"
        style={{ background: color, borderColor: colorBorder }}
        id={noteName}
      >
        <div className="col-sm-10 col-lg-10 col-8 align-self-center">
          {noteName}
        </div>{" "}
        <div className="col-sm-1 col-lg-1 col-2 align-self-center">
          <button className="btn" onClick={onAddNoteClick}>
            <i className="fa fa-close"></i>
          </button>
        </div>{" "}
        <div className="col-sm-1 col-lg-1 col-2 align-self-center">
          <button
            className="btn"
            onClick={() => {
              if (!accepted) {
                setaccepted(true);
                acceptNote(noteName);
                setColor("#e7f9f1");
                setColorBorder("#5a9475");
              }
            }}
          >
            <i className="fa fa-check"></i>{" "}
          </button>
        </div>
      </div>
    </>
  );
};
