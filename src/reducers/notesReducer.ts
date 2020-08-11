import { Action, Action2, Action3 } from "./../actions/notesActions";
export interface NotesState {
  notes: string[];
  notes_number: number;
  notes_done: string[];
  notes_done_number: number;
}

const initialState = {
  notes: [],
  notes_number: 0,
  notes_done: [],
  notes_done_number: 0,
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action | Action2 | Action3
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      if (!state.notes.includes(action.payload)) {
        return {
          ...state,
          notes: [...state.notes, action.payload],
          notes_number: state.notes_number + 1,
        };
      } else {
        return state;
      }
    }
    case "REMOVE_NOTE": {
      return {
        ...state,
        notes: state.notes.filter((comment) => comment !== action.payload),
        notes_number: state.notes_number - 1,
      };
    }
    case "MARK_NOTE_AS_DONE": {
      return {
        ...state,
        notes_done: [...state.notes, action.payload],
        notes_done_number: state.notes_done_number + 1,
      };
    }

    default:
      return state;
  }
};
