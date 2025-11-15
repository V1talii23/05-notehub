import css from './SearchBox..module.css';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

function SearchBox() {
  const [searchNote, setSearchNote] = useState('');

  const handleNotesInput = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchNote(e.target.value),
    2000
  );

  useEffect(() => {
    console.log(`New note search ${searchNote}`);
  }, [searchNote]);

  return (
    <input
      onChange={handleNotesInput}
      className={css.input}
      type="text"
      defaultValue={searchNote}
      placeholder="Search notes"
    />
  );
}

export default SearchBox;
