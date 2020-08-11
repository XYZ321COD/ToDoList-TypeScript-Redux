import React from "react";
import "./css/App.css";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./reducers/notesReducer";
import { NewNoteInput } from "./components/NewNoteInput";
import { addNote, removeNote, markNoteAsDone } from "./actions/notesActions";
import { Note } from "./components/Note";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavBar } from "./components/NavBar";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const number_of_notes = useSelector<NotesState, NotesState["notes_number"]>(
    (state) => state.notes_number
  );

  const number_of_notes_done = useSelector<
    NotesState,
    NotesState["notes_done_number"]
  >((state) => state.notes_done_number);

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  const onRemoveNote = (note: string) => {
    dispatch(removeNote(note));
  };

  const onAcceptNote = (note: string) => {
    dispatch(markNoteAsDone(note));
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container-fluid">
        <NewNoteInput addNote={onAddNote} />
        <hr></hr>
        <div className="row vertical-center">
          <div className="col-sm-12 col-xl-4 bordered-column">
            <div className="nice_text">
              Number of things to do: {number_of_notes - number_of_notes_done}
            </div>
            <ProgressBar
              variant="info"
              now={
                ((number_of_notes - number_of_notes_done) / number_of_notes) *
                100
              }
            />
            <div className="nice_text">
              Number of things done: {number_of_notes_done}
            </div>
            <ProgressBar
              variant="success"
              now={(number_of_notes_done / number_of_notes) * 100}
            />
          </div>
          <div className="col-sm-12 col-xl-7 bordered-column">
            <div className="nice_text2">List of things to do</div>

            {notes.map((note) => {
              return (
                <Note
                  key={note}
                  name={note}
                  removeNote={onRemoveNote}
                  acceptNote={onAcceptNote}
                ></Note>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
