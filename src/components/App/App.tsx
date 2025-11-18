import css from './App.module.css';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getNotes } from '../../services/noteServices';

import SearchBox from '../SearchBox/SearchBox';
import Pagination from '../Pagination/Pagination';
import NoteList from '../NoteList/NoteList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Modal from '../Modal/Modal';

const KEY = 'notes';

function App() {
  const [page, setPage] = useState(1);
  const [searchNote, setSearchNote] = useState('');
  const [toggle, seTtoggle] = useState(false);

  const openModal = () => seTtoggle(true);
  const closeModal = () => seTtoggle(false);

  const handlePage = ({ selected }: { selected: number }) =>
    setPage(selected + 1);

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchNote(e.target.value.trim());
      setPage(1);
    },
    1000
  );

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: [KEY, searchNote, page],
    queryFn: () => getNotes(searchNote, page),
    staleTime: 60 * 1000,
    placeholderData: keepPreviousData,
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {<SearchBox onChange={handleSearch} defaultValue={searchNote} />}
        {isSuccess && data.totalPages > 1 && (
          <Pagination
            pageCount={data.totalPages}
            onPageChange={handlePage}
            forcePage={page}
          />
        )}
        <button onClick={openModal} className={css.button}>
          Create note +
        </button>
      </header>
      {isLoading && <Loader />}
      {isError && <Error />}
      {isSuccess && <NoteList notes={data.notes} />}
      <Modal toggle={toggle} closeModal={closeModal} />
    </div>
  );
}

export default App;
