import css from './App.module.css';
import type { Note } from '../../types/notes';
import { fetchNotes } from '../../services/noteServices';
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Pagination from '../Pagination/Pagination';
import NoteList from '../NoteList/NoteList';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getAllNotes = async () => {
      const { notes, totalPages } = await fetchNotes();
      setNotes(notes);
      setPages(totalPages);
    };
    getAllNotes();
  }, []);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {<SearchBox />}
        {pages > 1 && <Pagination pageCount={pages} />}
        <button onClick={fetchNotes} className={css.button}>
          Create note +
        </button>
      </header>
      {notes.length !== 0 && <NoteList notes={notes} />}
    </div>
  );
}

export default App;
