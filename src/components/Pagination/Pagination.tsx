import css from './Pagination.module.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

interface Paginationprops {
  pageCount: number;
}

function Pagination({ pageCount }: Paginationprops) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => setCurrentPage(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

export default Pagination;
