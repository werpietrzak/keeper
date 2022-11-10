import { ArchiveContainer } from '../components/ArchiveContainer/ArchiveContainer';
import { StyledPage } from '../styles/App.style';

export const Archive = ({
  handleUnarchiveNote,
  handleDeleteNote,
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
      <ArchiveContainer
        notes={filteredNotes}
        handleDeleteNote={handleDeleteNote}
        handleUnarchiveNote={handleUnarchiveNote}
      />
    </StyledPage>
  );
};
