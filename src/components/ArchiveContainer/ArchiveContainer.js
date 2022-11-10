import { StyledNoteContainer } from '../NotesContainer/NotesContainer.style';
import { ArchivedNote } from '../ArchivedNote/ArchivedNote';

export const ArchiveContainer = ({
  notes,
  handleUnarchiveNote,
  handleDeleteNote,
}) => {
  return (
    <StyledNoteContainer>
      {notes.map((note) => (
        <ArchivedNote
          key={note.id}
          handleDeleteNote={handleDeleteNote}
          handleUnarchiveNote={handleUnarchiveNote}
          {...note}
        />
      ))}
    </StyledNoteContainer>
  );
};
