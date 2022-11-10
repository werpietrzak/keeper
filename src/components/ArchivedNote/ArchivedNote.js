import {
  NoteCard,
  NoteTitle,
  NoteContent,
  StyledButton,
  StyledInnerNote,
} from '../Note/Note.style';

export const ArchivedNote = ({
  id,
  title,
  body,
  color,
  handleDeleteNote,
  handleUnarchiveNote,
}) => {
  return (
    <NoteCard className={color}>
      <StyledInnerNote>
        <main>
          <NoteTitle>{title}</NoteTitle>
          <NoteContent>{body}</NoteContent>
        </main>
        <footer>
          <StyledButton onClick={handleUnarchiveNote(id)} className={color}>
            Unarchive
          </StyledButton>
          <StyledButton onClick={handleDeleteNote(id)} className={color}>
            Delete
          </StyledButton>
        </footer>
      </StyledInnerNote>
    </NoteCard>
  );
};
