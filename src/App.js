import { Archive } from './pages/Archive';
import { Header } from './layout/Header/Header';
import { Home } from './pages/Home';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { AppContainer, AppContent } from './styles/App.style';
import { initialNotes, initialArchiveNotes } from './utils/initialNotes';

export const App = () => {
  let storageNotes = initialNotes;
  let storageArchive = initialArchiveNotes;

  try {
    const notesTest = JSON.parse(window.localStorage.getItem('notes'));
    const archivedNotesTest = JSON.parse(
      window.localStorage.getItem('archivedNotes')
    );

    if (Array.isArray(notesTest)) {
      storageNotes = JSON.parse(window.localStorage.getItem('notes'));
    }
    if (Array.isArray(archivedNotesTest)) {
      storageArchive = JSON.parse(window.localStorage.getItem('archivedNotes'));
    }
  } catch (error) {
    console.error(error);
  }

  const [notes, setNotes] = useState(storageNotes);
  const [archivedNotes, setArchivedNotes] = useState(storageArchive);
  const [searchContent, setSearchContent] = useState('');

  const addNote = (titleText, bodyText, color) => {
    const newNote = {
      id: nanoid(),
      title: titleText,
      body: bodyText,
      color,
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const editNote = (id, titleText, bodyText, color) => {
    const noteToEdit = notes.find((note) => note.id === id);
    const index = notes.indexOf(noteToEdit);

    noteToEdit.title = titleText;
    noteToEdit.body = bodyText;
    noteToEdit.color = color;

    const newNotes = [
      ...notes.slice(0, index),
      noteToEdit,
      ...notes.slice(index + 1),
    ];

    setNotes(newNotes);
  };

  const archiveNote = (id) => {
    return () => {
      const archivedNote = notes.find((note) => note.id === id);
      const newArchivedNotes = [...archivedNotes, archivedNote];
      setArchivedNotes(newArchivedNotes);

      const newNotes = notes.filter((note) => note.id !== id);

      setNotes(newNotes);
    };
  };

  const unarchiveNote = (id) => {
    return () => {
      const unarchivedNote = archivedNotes.find((note) => note.id === id);
      setNotes([...notes, unarchivedNote]);

      const newArchivedNotes = archivedNotes.filter((note) => note.id !== id);
      setArchivedNotes(newArchivedNotes);
    };
  };

  const deleteNote = (id) => {
    return () => {
      const newArchivedNotes = archivedNotes.filter((note) => note.id !== id);
      setArchivedNotes(newArchivedNotes);
    };
  };

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    window.localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
  }, [archivedNotes]);

  return (
    <AppContainer>
      <AppContent>
        <Header handleSearchNote={setSearchContent} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                notes={notes}
                handleAddNote={addNote}
                handleArchiveNote={archiveNote}
                handleEditNote={editNote}
                searchContent={searchContent}
              />
            }
          />
          <Route
            path='/archive'
            element={
              <Archive
                notes={archivedNotes}
                handleUnarchiveNote={unarchiveNote}
                handleDeleteNote={deleteNote}
                searchContent={searchContent}
              />
            }
          />
        </Routes>
      </AppContent>
    </AppContainer>
  );
};
