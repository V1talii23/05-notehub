const NOTES_KEY = import.meta.env.VITE_NOTEHUB_TOKEN;

import axios from 'axios';
import type { Note } from '../types/notes';
// import { useQuery, keepPreviousData } from '@tanstack/react-query';

interface HttpsResponse {
  notes: Note[];
  totalPages: number;
}

const notesInstance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${NOTES_KEY}`,
  },
  //   params: {
  //     page: '',
  //     perPage: '',
  //   },
});

async function fetchNotes() {
  //   const notesQuery = useQuery({
  //     queryKey: ['notes'],
  //     queryFn: fetchNotes,
  //     placeholderData: keepPreviousData,
  //   });

  const res = await notesInstance.get<HttpsResponse>('/notes', {});
  console.log(res.data);

  return res.data;
}

export { fetchNotes };
