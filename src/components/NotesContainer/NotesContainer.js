import { Note } from '../Note/Note';
import { StyledNoteContainer } from './NotesContainer.style';
import { NoteInput } from '../NoteInput/NoteInput';

export const NotesContainer = ({
  notes,
  handleArchiveNote,
  handleEditNote,
  handleAddNote,
}) => {
  return (
    <StyledNoteContainer>
      {notes.map((note) => (
        <Note
          key={note.id}
          handleArchiveNote={handleArchiveNote}
          handleEditNote={handleEditNote}
          {...note}
        />
      ))}
      <NoteInput handleAddNote={handleAddNote} />
    </StyledNoteContainer>
  );
};
