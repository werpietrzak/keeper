import styled from 'styled-components';

export const NoteCard = styled.article`
  box-shadow: rgba(9, 30, 66, 0.4) 0px 1px 1px,
    rgba(9, 30, 66, 0.2) 0px 0px 1px 1px;
  border-radius: 10px;
  width: 20vw;
  height: 13vw;
  padding: 25px;
`;

export const NoteTitle = styled.p`
  margin: 0 0 5%;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const NoteContent = styled.div`
  overflow-y: scroll;
  height: 8vw;
  font-size: 1rem;
  word-wrap: break-word;
`;

export const StyledInnerNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  margin: 3% 1.5%;
  border: 1px solid;
  border-radius: 20px;
  padding: 2.5% 3.5%;
  background: none;
  font-size: 0.95rem;
`;
