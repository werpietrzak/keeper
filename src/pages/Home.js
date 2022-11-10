import { NotesContainer } from '../components/NotesContainer/NotesContainer';
import { StyledPage } from '../styles/App.style';

export const Home = ({
  handleAddNote,
  handleArchiveNote,
  handleEditNote,
  notes,
  searchContent,
}) => {
  const filteredNotes = notes.filter(
    (note) =>
      note.body
        .toLocaleLowerCase()
        .includes(searchContent.toLocaleLowerCase()) ||
      note.title.toLocaleLowerCase().includes(searchContent.toLocaleLowerCase())
  );

  return (
    <StyledPage>
      <NotesContainer
        notes={filteredNotes}
        handleArchiveNote={handleArchiveNote}
        handleEditNote={handleEditNote}
        handleAddNote={handleAddNote}
      />
    </StyledPage>
  );
};
