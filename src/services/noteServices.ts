const NOTES_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;

import axios from 'axios';
import type { Note, CreateNote } from '../types/notes';
// import { useQuery, keepPreviousData } from '@tanstack/react-query';

interface HttpsResponse {
  notes: Note[];
  totalPages: number;
}

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${NOTES_KEY}`;

const getNotes = async (search: string, page: number) => {
  const res = await axios.get<HttpsResponse>('/notes', {
    params: { page, perPage: 8, search },
  });
  console.log(res.data);

  return res.data;
};

const createNote = async (data: CreateNote) => {
  const res = await axios.put<Note>('/notes', data);
  return res.data;
};

export { getNotes, createNote };
