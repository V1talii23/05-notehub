import css from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

interface Paginationprops {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  forcePage: number;
}

function Pagination({ pageCount, onPageChange, forcePage }: Paginationprops) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      forcePage={forcePage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

export default Pagination;
