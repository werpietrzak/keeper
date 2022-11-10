import { nanoid } from 'nanoid';

export const initialNotes = [
  {
    id: nanoid(),
    title: `Hi, I'm a sample note!`,
    body: 'You can edit or archive me.',
    color: 'blush',
  },
];

export const initialArchiveNotes = [
  {
    id: nanoid(),
    title: `Hi, I'm an archived note!`,
    body: 'You can delete me permanently.',
    color: 'light-olive',
  },
];
