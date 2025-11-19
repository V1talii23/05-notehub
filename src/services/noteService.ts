const NOTES_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;
const URL = '/notes';

import axios from 'axios';
import type { Note, CreateNoteData } from '../types/note';

interface HttpsResponse {
  notes: Note[];
  totalPages: number;
}

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${NOTES_KEY}`;

const getNotes = async (search: string, page: number) => {
  const res = await axios.get<HttpsResponse>(URL, {
    params: { page, perPage: 12, search },
  });
  return res.data;
};

const createNote = async (data: CreateNoteData) => {
  const res = await axios.post<Note>(URL, data);
  return res.data;
};

const deleteNote = async (id: Note['id']) => {
  await axios.delete<Note>(`${URL}/${id}`);
  return console.log('deleted');
};

export { getNotes, createNote, deleteNote };
