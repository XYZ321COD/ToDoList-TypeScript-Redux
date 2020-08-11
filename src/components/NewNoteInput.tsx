import React, { ChangeEvent, useState } from "react";
import "../css/NewNoteInput.css";
interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <>
      <div className="row justify-content-center">
        <a
          type="button"
          className="action-button shadow animate red"
          data-toggle="modal"
          data-target="#AddNote"
        >
          {" "}
          Add note
        </a>
        <div
          className="modal fade"
          id="AddNote"
          role="dialog"
          aria-labelledby="AddNoteLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AddNoteLabel">
                  What's the next thing you wanna do today?{" "}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Insert note name:</label>
                    <input
                      className="form-control"
                      id="message-text"
                      value={note}
                      onChange={updateNote}
                    ></input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={onAddNoteClick}
                >
                  Add note{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
