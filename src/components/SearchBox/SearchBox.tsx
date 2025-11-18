import css from './SearchBox..module.css';
// import { useState, useEffect } from 'react';
// import { useDebouncedCallback } from 'use-debounce';

interface SearchBoxProps {
  onChange: (note: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
}

function SearchBox({ onChange, defaultValue }: SearchBoxProps) {
  return (
    <input
      onChange={onChange}
      className={css.input}
      type="text"
      defaultValue={defaultValue}
      placeholder="Search notes"
    />
  );
}

export default SearchBox;
