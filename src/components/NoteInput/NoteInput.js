import { useState } from 'react';
import { StyledInput, StyledTextArea, Footer } from './NoteInput.style';
import { NoteCard, StyledButton } from '../Note/Note.style';
import { noteColors } from '../../utils/noteColors';

export const NoteInput = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [color, setColor] = useState('white');

  const handleChangeTitle = ({ target }) => {
    setNoteTitle(target.value);
  };

  const handleChangeBody = ({ target }) => {
    setNoteContent(target.value);
  };

  const handleClickColor = ({ target }) => {
    setColor(target.value);
  };

  const handleClick = () => {
    if (noteContent.trim().length) {
      handleAddNote(noteTitle, noteContent, color);

      setNoteTitle('');
      setNoteContent('');
      setColor('white');
    }
  };

  return (
    <NoteCard className={color}>
      <StyledInput
        type='text'
        value={noteTitle}
        placeholder='Title'
        onChange={handleChangeTitle}
      />
      <StyledTextArea
        rows='5'
        cols='32'
        value={noteContent}
        placeholder='Start your new note here.'
        onChange={handleChangeBody}
      />
      <Footer>
        <div>
          {noteColors.map((color) => (
            <input
              type='radio'
              name='color'
              key={color}
              value={color}
              className={color}
              onChange={handleClickColor}
            />
          ))}
        </div>
        <StyledButton onClick={handleClick} className={color}>
          Add
        </StyledButton>
      </Footer>
    </NoteCard>
  );
};
