export type Action = { type: "ADD_NOTE"; payload: string };
export type Action2 = { type: "REMOVE_NOTE"; payload: string };
export type Action3 = { type: "MARK_NOTE_AS_DONE"; payload: string };

export const addNote = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

export const removeNote = (note: string): Action2 => ({
  type: "REMOVE_NOTE",
  payload: note,
});

export const markNoteAsDone = (note: string): Action3 => ({
  type: "MARK_NOTE_AS_DONE",
  payload: note,
});
