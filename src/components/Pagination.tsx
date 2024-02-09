import React from 'react';

type PaginateProp = {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: (number: number) => void;
  currentPage: number;
};

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage, currentPage }: PaginateProp) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a
              onClick={() => setCurrentPage(number)}
              href='!#'
              className={currentPage === number ? 'page-link bg-primary text-white' : 'page-link'}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <nav aria-label='Page navigation example'></nav>
    </nav>
  );
};

export default Pagination;
