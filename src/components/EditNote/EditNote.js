import { noteColors } from '../../utils/noteColors';
import {
  StyledInput,
  StyledTextArea,
  Footer,
} from '../NoteInput/NoteInput.style';
import { StyledButton } from '../Note/Note.style';

export const EditNote = ({
  noteTitle,
  noteContent,
  handleChangeTitle,
  handleChangeBody,
  handleChangeColor,
  handleClickSave,
}) => {
  return (
    <div>
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
        placeholder='Edit your note here.'
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
              onChange={handleChangeColor}
            />
          ))}
        </div>
        <StyledButton onClick={handleClickSave}>Save</StyledButton>
      </Footer>
    </div>
  );
};
