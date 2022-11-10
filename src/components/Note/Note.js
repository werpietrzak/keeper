import { useState } from 'react';
import {
  NoteCard,
  NoteTitle,
  NoteContent,
  StyledButton,
  StyledInnerNote,
} from './Note.style';
import { EditNote } from '../EditNote/EditNote';

export const Note = ({
  id,
  title,
  body,
  color,
  handleArchiveNote,
  handleEditNote,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteContent, setNoteContent] = useState(body);
  const [noteColor, setNoteColor] = useState(color);

  const toggleMode = () => {
    setEditMode((editMode) => !editMode);
  };

  const handleChangeTitle = ({ target }) => {
    setNoteTitle(target.value);
  };

  const handleChangeBody = ({ target }) => {
    setNoteContent(target.value);
  };

  const handleChangeColor = ({ target }) => {
    setNoteColor(target.value);
  };

  const handleClickSave = () => {
    if (noteContent.trim().length) {
      handleEditNote(id, noteTitle, noteContent, noteColor);
      setEditMode(false);
    }
  };

  return (
    <NoteCard className={noteColor}>
      <StyledInnerNote>
        <div className={editMode ? 'hidden' : 'undefined'}>
          <main>
            <NoteTitle>{title}</NoteTitle>
            <NoteContent>{body}</NoteContent>
          </main>
          <footer>
            <StyledButton onClick={toggleMode} className={color}>
              Edit
            </StyledButton>
            <StyledButton onClick={handleArchiveNote(id)} className={color}>
              Archive
            </StyledButton>
          </footer>
        </div>
        <div className={editMode ? 'edit-mode' : 'hidden'}>
          <EditNote
            noteTitle={noteTitle}
            noteContent={noteContent}
            color={color}
            handleChangeTitle={handleChangeTitle}
            handleChangeBody={handleChangeBody}
            handleChangeColor={handleChangeColor}
            handleClickSave={handleClickSave}
            className={editMode && 'hidden'}
          />
        </div>
      </StyledInnerNote>
    </NoteCard>
  );
};
